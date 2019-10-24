import { BitlyClient } from 'bitly';
import moment from 'moment';
import Random from 'meteor-random';
import HTTPStatus from 'http-status';
import Coupon from './coupon.model';
import constants from '../../config/constants';


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
    const bitly = new BitlyClient(constants.BITLY_ACCESS_TOKEN, {});

    const expirationDate = moment().add(3, 'days').toDate();
    const pin = Random.id(7);
    const status = 'ACTIVE';

    const coupon = await Coupon.create({ ...req.body, expirationDate, pin, status });

    const hiddenDetails = `courses=${req.body.courses.join(',')}&expDate=${expirationDate}&channelId=${req.body.newFields.channelId}&userName=${req.body.ownerDetails.name}`;

    const base64Url = await Buffer.from(hiddenDetails).toString('base64');

    const newUrl = await `https://pianoafrik-downloader.netlify.com?301040${base64Url}`;

    const bitlyLink = await bitly.shorten(newUrl);

    res.status(HTTPStatus.CREATED).json({ coupon, bitly: bitlyLink });
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

  res.status(HTTPStatus.OK).json(coupon.toJson());
};


export const deleteCoupon = async (req, res) => {
  const id = req.params.id;

  const coupon = await Coupon.findById(id);
  if (!coupon) {
    res.sendStatus(HTTPStatus.NOT_FOUND);
    return;
  }

  await coupon.destroy();

  res.sendStatus(HTTPStatus.NO_CONTENT);
};
