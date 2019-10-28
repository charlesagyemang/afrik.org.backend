import HTTPStatus from 'http-status';
// import jwt from 'jsonwebtoken';
import { channelsClient } from '../notifications/notifications.controller';
import { testDownloadApi, testDownloadApi2, linksTest } from '../cronJobs/cronJobs.controller';
import Coupon from '../coupon/coupon.model';
import Course from '../course/course.model';
import Channel from '../channel/channel.model';
import Lesson from '../lesson/lesson.model';
import User from '../user/user.model';
// import constants from '../../config/constants'


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
    // Coupon.destroy({ where: {} });
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

export const pusherListener = async (req, res) => {
  try {
    const coupons = await Coupon.findAll({ where: {} });
    // pusher stuff
    await channelsClient.trigger('pusherListener', 'koobiEvent',
      { message: 'hello world' },
    );

    res.status(HTTPStatus.OK).json(coupons);
  } catch (e) {
    console.log(e);
  }
};

export const getDownloadLinkWithOptions = async (req, res) => {
  try {
    linksTest(req.body.url, (info) => {
      res.json(info);
    });
  } catch (e) {
    console.log(e);
  }
};


export const userCreateCoupon = async (req, res) => {
  try {
    const channels = await Channel.findAll({ where: {},
      include: [{
        model: Course,
        include: [{
          model: Lesson,
        }],
      }],
    });
    res.status(HTTPStatus.OK).json(channels);
  } catch (e) {
    console.log(e);
  }
};

export const tempDeleteChannel = async (req, res) => {
  try {
    const channel = await Channel.findByPk(req.body.channelId);
    // const courses = await Course.findAll({ where: { channelId: channel.id } });
    // await courses.forEach(async (course) => {
    //   const lesson = await Lesson.findAll({ where: { courseId: course.id } });
    //   lesson.forEach(async (les) => {
    //     await Lesson.destroy({ where: { id: les.id } });
    //   });
    //   await course.destroy();
    // });
    await channel.destroy();
    res.status(HTTPStatus.OK).json(channel);
  } catch (e) {
    console.log(e);
  }
};
