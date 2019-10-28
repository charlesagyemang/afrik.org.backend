import HTTPStatus from 'http-status';
import Course from './course.model';
import Channel from '../channel/channel.model';
import Lesson from '../lesson/lesson.model';
import Coupon from '../coupon/coupon.model';

export const getCourse = async (req, res) => {
  const id = req.params.id;

  const course = await Course.findById(id);
  if (!course) {
    res.sendStatus(HTTPStatus.NOT_FOUND);
    return;
  }

  const channel = await Channel.find({ where: { id: course.channelId },
    include: [{
      model: Course,
      include: [{
        model: Lesson,
      }],
    }, { model: Coupon }],
  });

  res.status(HTTPStatus.OK).json(channel);
  // res.send(course);
};

export const createCourse = async (req, res) => {
  try {
    const course = await Course.create({ ...req.body });

    const channel = await Channel.find({ where: { id: course.channelId },
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

export const updateCourse = async (req, res) => {
  try {
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

    const channel = await Channel.find({ where: { id: course.channelId },
      include: [{
        model: Course,
        include: [{
          model: Lesson,
        }],
      }, { model: Coupon }],
    });

    res.status(HTTPStatus.OK).json(channel);
  } catch (e) {
    console.log(e);
  }
};


export const deleteCourse = async (req, res) => {
  try {
    const id = req.params.id;

    const course = await Course.findById(id);
    if (!course) {
      res.sendStatus(HTTPStatus.NOT_FOUND);
      return;
    }

    // destroy all lessons under firdst

    await Lesson.destroy({ where: { courseId: id } });

    await course.destroy();

    const channel = await Channel.find({ where: { id: req.body.channelId },
      include: [{
        model: Course,
        include: [{
          model: Lesson,
        }],
      }, { model: Coupon }],
    });

    res.status(HTTPStatus.OK).json(channel);
  } catch (e) {
    console.log(e);
  }
};


export const bulkCreater = async (req, res) => {
  try {
    console.log(req.body.paylod.length);

    req.body.paylod.forEach(async (course) => {
      await Course.create(course);
    });

    const channel = await Channel.find({ where: { id: req.params.id },
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
