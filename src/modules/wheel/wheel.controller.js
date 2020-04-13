import HTTPStatus from 'http-status';
import Promo from '../promo/promo.model';
import Response from '../response/response.model';
import Owner from '../owner/owner.model';
import Wheel from './wheel.model';

export const getWheel = async (req, res) => {
  const id = req.params.id;

  const wheel = await Wheel.find({ where: { id },
    include: [
      {
        model: Owner,
      },
      {
        model: Promo,
      },
      {
        model: Response,
      },
    ],
  });
  if (!wheel) {
    res.sendStatus(HTTPStatus.NOT_FOUND);
    return;
  }
  res.send(wheel);
};


export const getAllWheels = async (req, res) => {
  const wheel = await Wheel.findAll({ where: {},
    include: [
      {
        model: Owner,
      },
      {
        model: Promo,
      },
      {
        model: Response,
      },
    ],
  });

  res.status(HTTPStatus.OK).json(wheel);
};

export const createWheel = async (req, res) => {
  const wheel = await Wheel.create({ ...req.body });

  res.status(HTTPStatus.CREATED).json(wheel);
};

export const updateWheel = async (req, res) => {
  const id = req.params.id;

  const wheel = await Wheel.findById(id);
  if (!wheel) {
    res.sendStatus(HTTPStatus.NOT_FOUND);
    return;
  }

  Object.keys(req.body).forEach((key) => {
    wheel[key] = req.body[key];
  });

  await wheel.save();

  res.status(HTTPStatus.OK).json(wheel.toJson());
};


export const deleteWheel = async (req, res) => {
  const id = req.params.id;

  const wheel = await Wheel.findById(id);
  if (!wheel) {
    res.sendStatus(HTTPStatus.NOT_FOUND);
    return;
  }

  await wheel.destroy();

  res.sendStatus(HTTPStatus.NO_CONTENT);
};
