import HTTPStatus from 'http-status';
import Promo from './promo.model';

export const getPromo = async (req, res) => {
  const id = req.params.id;

  const promo = await Promo.findById(id);
  if (!promo) {
    res.sendStatus(HTTPStatus.NOT_FOUND);
    return;
  }
  res.send(promo);
};

export const createPromo = async (req, res) => {
  const promo = await Promo.create({ ...req.body });

  res.status(HTTPStatus.CREATED).json(promo);
};

export const updatePromo = async (req, res) => {
  const id = req.params.id;

  const promo = await Promo.findById(id);
  if (!promo) {
    res.sendStatus(HTTPStatus.NOT_FOUND);
    return;
  }

  Object.keys(req.body).forEach((key) => {
    promo[key] = req.body[key];
  });

  await promo.save();

  res.status(HTTPStatus.OK).json(promo.toJson());
};


export const deletePromo = async (req, res) => {
  const id = req.params.id;

  const promo = await Promo.findById(id);
  if (!promo) {
    res.sendStatus(HTTPStatus.NOT_FOUND);
    return;
  }

  await promo.destroy();

  res.sendStatus(HTTPStatus.NO_CONTENT);
};

