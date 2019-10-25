import { BitlyClient } from 'bitly';
import moment from 'moment';
import Random from 'meteor-random';
import HTTPStatus from 'http-status';
import Coupon from './coupon.model';
import Channel from '../channel/channel.model';
import Lesson from '../lesson/lesson.model';
import Course from '../course/course.model';
import constants from '../../config/constants';

const bitly = new BitlyClient(constants.BITLY_ACCESS_TOKEN, {});

export const getCoupon = async (req, res) => {
  const id = req.params.id;

  const coupon = await Coupon.findById(id);
  if (!coupon) {
    res.sendStatus(HTTPStatus.NOT_FOUND);
    return;
  }
  res.send(coupon);
};

export const createCoupon = async (req, res) => {
  try {
    const expirationDate = moment().add(parseInt(req.body.newFields.days, 10), 'days').toDate();
    const pin = Random.id(7);
    const status = 'ACTIVE';

    const hiddenDetails = `courses=${req.body.courses.join(',')}&expDate=${expirationDate}&channelId=${req.body.newFields.channelId}&userName=${req.body.ownerDetails.name}`;

    const base64Url = await Buffer.from(hiddenDetails).toString('base64');

    const newUrl = await `https://pianoafrik-downloader.netlify.com/en-download/?301040${base64Url}`;

    const bitlyLink = await bitly.shorten(newUrl);

    const newFields = { ...req.body.newFields, link: bitlyLink.url };

    await Coupon.create({ ...req.body, expirationDate, pin, status, newFields });

    const channel = await Channel.find({ where: { id: req.body.channelId },
      include: [{
        model: Course,
        include: [{
          model: Lesson,
        }],
      }, { model: Coupon }],
    });

    res.status(HTTPStatus.CREATED).json(channel);
  } catch (e) {
    console.log(e);
  }
};

export const updateCoupon = async (req, res) => {
  const id = req.params.id;

  const coupon = await Coupon.findById(id);
  if (!coupon) {
    res.sendStatus(HTTPStatus.NOT_FOUND);
    return;
  }

  Object.keys(req.body).forEach((key) => {
    coupon[key] = req.body[key];
  });

  await coupon.save();

  const channel = await Channel.find({ where: { id: coupon.channelId },
    include: [{
      model: Course,
      include: [{
        model: Lesson,
      }],
    }, { model: Coupon }],
  });

  res.status(HTTPStatus.OK).json(channel);

  // res.status(HTTPStatus.OK).json(coupon.toJson());
};


export const deleteCoupon = async (req, res) => {
  const id = req.params.id;

  const coupon = await Coupon.findById(id);
  if (!coupon) {
    res.sendStatus(HTTPStatus.NOT_FOUND);
    return;
  }

  const channel = await Channel.find({ where: { id: coupon.channelId },
    include: [{
      model: Course,
      include: [{
        model: Lesson,
      }],
    }, { model: Coupon }],
  });

  await coupon.destroy();

  res.status(HTTPStatus.OK).json(channel);

  // res.sendStatus(HTTPStatus.NO_CONTENT);
};
