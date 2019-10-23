import HTTPStatus from 'http-status';
import Course from './course.model';
import Channel from '../channel/channel.model';
import Lesson from '../lesson/lesson.model';

export const getCourse = async (req, res) => {
  const id = req.params.id;

  const course = await Course.findById(id);
  if (!course) {
    res.sendStatus(HTTPStatus.NOT_FOUND);
    return;
  }
  res.send(course);
};

export const createCourse = async (req, res) => {
  try {
    await Course.create({ ...req.body });

    const channel = await Channel.find({ where: { id: req.body.channelId },
      include: [{
        model: Course,
        include: [{
          model: Lesson,
        }],
      }],
    });

    res.status(HTTPStatus.CREATED).json(channel);
  } catch (e) {
    console.log(e);
  }
};

export const updateCourse = async (req, res) => {
  const id = req.params.id;

  const course = await Course.findById(id);
  if (!course) {
    res.sendStatus(HTTPStatus.NOT_FOUND);
    return;
  }

  Object.keys(req.body).forEach((key) => {
    course[key] = req.body[key];
  });

  await course.save();

  res.status(HTTPStatus.OK).json(course.toJson());
};


export const deleteCourse = async (req, res) => {
  const id = req.params.id;

  const course = await Course.findById(id);
  if (!course) {
    res.sendStatus(HTTPStatus.NOT_FOUND);
    return;
  }

  await course.destroy();

  res.sendStatus(HTTPStatus.NO_CONTENT);
};
