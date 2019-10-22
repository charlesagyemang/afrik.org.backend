import HTTPStatus from 'http-status';
import Course from './course.model';

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
  const course = await Course.create({ ...req.body });

  res.status(HTTPStatus.CREATED).json(course);
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
