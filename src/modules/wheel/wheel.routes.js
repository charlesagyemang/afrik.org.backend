import { Router } from 'express';
import validate from 'express-validation';
import * as c from './wheel.controller';
import v from './wheel.validation';
import { authJwt } from '../../config/passport';

const WheelRouter = Router();

WheelRouter.get('/:id', authJwt, c.getWheel);
WheelRouter.post('/', validate(v.createWheel), c.createWheel);
WheelRouter.patch('/:id', validate(v.updateWheel), authJwt, c.updateWheel);
WheelRouter.delete('/:id', authJwt, c.deleteWheel);

export default WheelRouter;
