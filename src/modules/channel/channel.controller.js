import HTTPStatus from 'http-status';
import Channel from './channel.model';
import Course from '../course/course.model';
import Lesson from '../lesson/lesson.model';
import Coupon from '../coupon/coupon.model';


export const getChannel = async (req, res) => {
  const id = req.params.id;

  const channel = await Channel.findByPk(id, {
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
};

export const createChannel = async (req, res) => {
  try {
    const channel = await Channel.create({ ...req.body });

    res.status(HTTPStatus.CREATED).json(channel);
  } catch (e) {
    console.log(e);
  }
};

export const updateChannel = async (req, res) => {
  const id = req.params.id;

  const channel = await Channel.findById(id);
  if (!channel) {
    res.sendStatus(HTTPStatus.NOT_FOUND);
    return;
  }

  Object.keys(req.body).forEach((key) => {
    channel[key] = req.body[key];
  });

  await channel.save();

  res.status(HTTPStatus.OK).json(channel.toJson());
};


export const deleteChannel = async (req, res) => {
  const id = req.params.id;

  const channel = await Channel.findById(id);
  if (!channel) {
    res.sendStatus(HTTPStatus.NOT_FOUND);
    return;
  }

  await channel.destroy();

  res.sendStatus(HTTPStatus.NO_CONTENT);
};
