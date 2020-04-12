import HTTPStatus from 'http-status';
import Test from './test.model';

export const getTest = async (req, res) => {
  const id = req.param.id;

  const test = await Test.findById(id);
  if (!test) {
    res.sendStatus(HTTPStatus.NOT_FOUND);
    return;
  }
  res.send(test);
};

export const createTest = async (req, res) => {
  const test = await Test.create({ ...req.body });

  res.status(HTTPStatus.CREATED).json(test);
};

export const updateTest = async (req, res) => {
  const id = req.param.id;

  const test = await Test.findById(id);
  if (!test) {
    res.sendStatus(HTTPStatus.NOT_FOUND);
    return;
  }

  Object.keys(req.body).forEach((key) => {
    test[key] = req.body[key];
  });

  await test.save();

  res.status(HTTPStatus.OK).json(test.toJson());
};


export const deleteTest = async (req, res) => {
  const id = req.param.id;

  const test = await Test.findById(id);
  if (!test) {
    res.sendStatus(HTTPStatus.NOT_FOUND);
    return;
  }

  await test.destroy();

  res.sendStatus(HTTPStatus.NO_CONTENT);
};
