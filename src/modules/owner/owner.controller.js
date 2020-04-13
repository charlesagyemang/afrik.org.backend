import HTTPStatus from 'http-status';
import Owner from './owner.model';

export const getOwner = async (req, res) => {
  const id = req.params.id;

  const owner = await Owner.findById(id);
  if (!owner) {
    res.sendStatus(HTTPStatus.NOT_FOUND);
    return;
  }
  res.send(owner);
};

export const createOwner = async (req, res) => {
  const owner = await Owner.create({ ...req.body });

  res.status(HTTPStatus.CREATED).json(owner);
};

export const updateOwner = async (req, res) => {
  const id = req.params.id;

  const owner = await Owner.findById(id);
  if (!owner) {
    res.sendStatus(HTTPStatus.NOT_FOUND);
    return;
  }

  Object.keys(req.body).forEach((key) => {
    owner[key] = req.body[key];
  });

  await owner.save();

  res.status(HTTPStatus.OK).json(owner.toJson());
};


export const deleteOwner = async (req, res) => {
  const id = req.params.id;

  const owner = await Owner.findById(id);
  if (!owner) {
    res.sendStatus(HTTPStatus.NOT_FOUND);
    return;
  }

  await owner.destroy();

  res.sendStatus(HTTPStatus.NO_CONTENT);
};

