import Queue from 'bull';
import HTTPStatus from 'http-status';
import { testDownloadApi, testDownloadApi2 } from '../cronJobs/cronJobs.controller';
import Coupon from '../coupon/coupon.model';
import Course from '../course/course.model';
import Channel from '../channel/channel.model';
import Lesson from '../lesson/lesson.model';


const REDIS_URL = process.env.REDIS_URL || 'redis://127.0.0.1:6379';
const workQueue = new Queue('work', REDIS_URL);

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

export const jobRun = async (req, res) => {
  try {
    const job = await workQueue.add();
    res.json({ id: job.id });
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
  // res.send(course);
};
