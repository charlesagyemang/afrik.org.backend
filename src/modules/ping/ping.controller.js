import HTTPStatus from 'http-status';
import { testDownloadApi, testDownloadApi2 } from '../cronJobs/cronJobs.controller';
import Coupon from '../coupon/coupon.model';
import Course from '../course/course.model';
import Channel from '../channel/channel.model';
import Lesson from '../lesson/lesson.model';
import User from '../user/user.model';


export const pingServer = async (req, res) => {
  const download = { message: 'Hey There' };

  res.status(HTTPStatus.OK).json(download);
};

export const getDownloadLink = async (req, res) => {
  try {
    await testDownloadApi(req.body.url, (data) => {
      const ret = { link: data };
      return res.status(HTTPStatus.OK).json(ret);
    });
  } catch (e) {
    console.log(e);
  }
};

export const getDownloadLinks = async (req, res) => {
  try {
    // req.setTimeOut(0);
    await testDownloadApi2(req.body.payload, (data) => {
      // console.log(data);
      const ret = data;
      return res.status(HTTPStatus.OK).json(ret);
    });
  } catch (e) {
    console.log(e);
  }
};


export const teletabies = async (req, res) => {
  try {
    Coupon.destroy({ where: {} });
    res.json({ message: 'DONEEEE!!!!' });
  } catch (e) {
    console.log(e);
  }
};

export const cookShit = async (req, res) => {
  try {
    const channel = await Channel.find({ where: { id: req.body.channelId },
      include: [{
        model: Course,
        include: [{
          model: Lesson,
        }],
      }, { model: Coupon }],
    });

    if (!channel) {
      res.sendStatus(HTTPStatus.NOT_FOUND);
      return;
    }

    res.status(HTTPStatus.OK).json(channel);
  } catch (e) {
    console.log(e);
  }
};

export const shattaBundles = async (req, res) => {
  try {
    console.log('heyyy');
    const user = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      role: 'user',
    });
    const u = await user.auth();

    let channel = await Channel.create({
      userId: u.id,
      payload: req.body.payload,
      name: req.body.name,
      link: req.body.channelLink,
    });


    channel = await Channel.find({ where: { id: channel.id },
      include: [{
        model: Course,
        include: [{
          model: Lesson,
        }],
      }, { model: Coupon }],
    });

    res.status(HTTPStatus.OK).json({ u, channel });
  } catch (e) {
    console.log(e);
  }
};
