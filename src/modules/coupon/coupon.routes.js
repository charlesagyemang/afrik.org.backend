import { Router } from 'express';
import validate from 'express-validation';
import * as c from './coupon.controller';
import v from './coupon.validation';
import { authJwt } from '../../config/passport';

const CouponRouter = Router();

CouponRouter.get('/:id', authJwt, c.getCoupon);
CouponRouter.post('/', authJwt, validate(v.createCoupon), c.createCoupon);
CouponRouter.post('/edit/:id', validate(v.updateCoupon), authJwt, c.updateCoupon);
CouponRouter.delete('/:id', authJwt, c.deleteCoupon);

export default CouponRouter;
