import { Router } from 'express';
import validate from 'express-validation';
import * as c from './response.controller';
import v from './response.validation';
// import { authJwt } from '../../config/passport';

const ResponseRouter = Router();

ResponseRouter.get('/:id', c.getResponse);
ResponseRouter.post('/', validate(v.createResponse), c.createResponse);
ResponseRouter.patch('/:id', validate(v.updateResponse), c.updateResponse);
ResponseRouter.delete('/:id', c.deleteResponse);

export default ResponseRouter;
