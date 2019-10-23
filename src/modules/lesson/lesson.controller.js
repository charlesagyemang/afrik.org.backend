import HTTPStatus from 'http-status';
import Lesson from './lesson.model';
import Course from '../course/course.model';
import Channel from '../channel/channel.model';
// import Lesson from '../lesson/lesson.model';

export const getLesson = async (req, res) => {
  const id = req.params.id;

  const lesson = await Lesson.findById(id);
  if (!lesson) {
    res.sendStatus(HTTPStatus.NOT_FOUND);
    return;
  }
  res.send(lesson);
};

export const createLesson = async (req, res) => {
  try {
    await Lesson.create({ ...req.body });
    const channel = await Channel.find({ where: { id: req.params.id },
      include: [{
        model: Course,
        include: [{
          model: Lesson,
        }],
      }],
    });

    res.status(HTTPStatus.CREATED).json(channel);

    // res.status(HTTPStatus.CREATED).json(lesson);
  } catch (e) {
    console.log(e);
  }
};

export const updateLesson = async (req, res) => {
  try {
    const id = req.params.id.split(',')[0];
    const channelId = req.params.id.split(',')[1];

    const lesson = await Lesson.findById(id);
    if (!lesson) {
      res.sendStatus(HTTPStatus.NOT_FOUND);
      return;
    }

    Object.keys(req.body).forEach((key) => {
      lesson[key] = req.body[key];
    });

    await lesson.save();

    const channel = await Channel.find({ where: { id: channelId },
      include: [{
        model: Course,
        include: [{
          model: Lesson,
        }],
      }],
    });

    res.status(HTTPStatus.OK).json(channel);

    // res.status(HTTPStatus.OK).json(lesson.toJson());
  } catch (e) {
    console.log(e);
  }
};


export const deleteLesson = async (req, res) => {
  try {
    const id = req.params.id.split(',')[0];
    const channelId = req.params.id.split(',')[1];

    const lesson = await Lesson.findById(id);
    if (!lesson) {
      res.sendStatus(HTTPStatus.NOT_FOUND);
      return;
    }

    await lesson.destroy();

    const channel = await Channel.find({ where: { id: channelId },
      include: [{
        model: Course,
        include: [{
          model: Lesson,
        }],
      }],
    });

    res.status(HTTPStatus.NO_CONTENT).json(channel);

    // res.sendStatus(HTTPStatus.NO_CONTENT);
  } catch (e) {
    console.log(e);
  }
};
