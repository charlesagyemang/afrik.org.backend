import { Router } from 'express';
import validate from 'express-validation';
import * as c from './radio.controller';
import v from './radio.validation';

const RadioRouter = Router();
//
RadioRouter.get('/:id', c.getRadio);
RadioRouter.post('/agba-details', c.getAgbaRadio);
RadioRouter.post('/all', c.getAllRadioStations);
RadioRouter.post('/', validate(v.createRadio), c.createRadio);
RadioRouter.post('/edit/:id', validate(v.updateRadio), c.updateRadio);
RadioRouter.delete('/delete/:id', c.deleteRadio);

export default RadioRouter;
