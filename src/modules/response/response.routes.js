import { Router } from 'express';
import validate from 'express-validation';
import * as c from './response.controller';
import v from './response.validation';
import { authJwt } from '../../config/passport';

const ResponseRouter = Router();

ResponseRouter.get('/:id', authJwt, c.getResponse);
ResponseRouter.post('/', validate(v.createResponse), c.createResponse);
ResponseRouter.patch('/:id', validate(v.updateResponse), authJwt, c.updateResponse);
ResponseRouter.delete('/:id', authJwt, c.deleteResponse);

export default ResponseRouter;
