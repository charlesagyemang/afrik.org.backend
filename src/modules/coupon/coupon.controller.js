import moment from 'moment';
import Random from 'meteor-random';
import HTTPStatus from 'http-status';
import Coupon from './coupon.model';

export const getCoupon = async (req, res) => {
  const id = req.params.id;

  const coupon = await Coupon.findById(id);
  if (!coupon) {
    res.sendStatus(HTTPStatus.NOT_FOUND);
    return;
  }
  res.send(coupon);
};

export const createCoupon = async (req, res) => {
  const today = moment();
  const expirationDate = today.add(3, 'days').toDate();
  const pin = Random.id(7);
  const status = 'INACTIVE';

  const coupon = await Coupon.create({ ...req.body, expirationDate, pin, status });

  res.status(HTTPStatus.CREATED).json(coupon);
};

export const updateCoupon = async (req, res) => {
  const id = req.params.id;

  const coupon = await Coupon.findById(id);
  if (!coupon) {
    res.sendStatus(HTTPStatus.NOT_FOUND);
    return;
  }

  Object.keys(req.body).forEach((key) => {
    coupon[key] = req.body[key];
  });

  await coupon.save();

  res.status(HTTPStatus.OK).json(coupon.toJson());
};


export const deleteCoupon = async (req, res) => {
  const id = req.params.id;

  const coupon = await Coupon.findById(id);
  if (!coupon) {
    res.sendStatus(HTTPStatus.NOT_FOUND);
    return;
  }

  await coupon.destroy();

  res.sendStatus(HTTPStatus.NO_CONTENT);
};
