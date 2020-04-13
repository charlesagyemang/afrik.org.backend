import { Router } from 'express';
import validate from 'express-validation';
import * as c from './wheel.controller';
import v from './wheel.validation';
// import { authJwt } from '../../config/passport';

const WheelRouter = Router();

WheelRouter.get('/:id', c.getWheel);
WheelRouter.post('/', validate(v.createWheel), c.createWheel);
WheelRouter.post('/all', c.getAllWheels);
WheelRouter.patch('/:id', validate(v.updateWheel), c.updateWheel);
WheelRouter.delete('/:id', c.deleteWheel);

export default WheelRouter;
