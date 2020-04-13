import HTTPStatus from 'http-status';
import Response from './response.model';

export const getResponse = async (req, res) => {
  const id = req.params.id;

  const response = await Response.findById(id);
  if (!response) {
    res.sendStatus(HTTPStatus.NOT_FOUND);
    return;
  }
  res.send(response);
};

export const createResponse = async (req, res) => {
  const response = await Response.create({ ...req.body });

  res.status(HTTPStatus.CREATED).json(response);
};

export const updateResponse = async (req, res) => {
  const id = req.params.id;

  const response = await Response.findById(id);
  if (!response) {
    res.sendStatus(HTTPStatus.NOT_FOUND);
    return;
  }

  Object.keys(req.body).forEach((key) => {
    response[key] = req.body[key];
  });

  await response.save();

  res.status(HTTPStatus.OK).json(response.toJson());
};


export const deleteResponse = async (req, res) => {
  const id = req.params.id;

  const response = await Response.findById(id);
  if (!response) {
    res.sendStatus(HTTPStatus.NOT_FOUND);
    return;
  }

  await response.destroy();

  res.sendStatus(HTTPStatus.NO_CONTENT);
};

