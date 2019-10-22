import HTTPStatus from 'http-status';
import Lesson from './lesson.model';

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
    const lesson = await Lesson.create({ ...req.body });

    res.status(HTTPStatus.CREATED).json(lesson);
  } catch (e) {
    console.log(e);
  }
};

export const updateLesson = async (req, res) => {
  const id = req.params.id;

  const lesson = await Lesson.findById(id);
  if (!lesson) {
    res.sendStatus(HTTPStatus.NOT_FOUND);
    return;
  }

  Object.keys(req.body).forEach((key) => {
    lesson[key] = req.body[key];
  });

  await lesson.save();

  res.status(HTTPStatus.OK).json(lesson.toJson());
};


export const deleteLesson = async (req, res) => {
  const id = req.params.id;

  const lesson = await Lesson.findById(id);
  if (!lesson) {
    res.sendStatus(HTTPStatus.NOT_FOUND);
    return;
  }

  await lesson.destroy();

  res.sendStatus(HTTPStatus.NO_CONTENT);
};
