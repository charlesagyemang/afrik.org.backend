import { Router } from 'express';
import validate from 'express-validation';
import * as c from './test.controller';
import v from './test.validation';
import { authJwt } from '../../config/passport';

const TestRouter = Router();

TestRouter.get('/:id', authJwt, c.getTest);
TestRouter.post('/', validate(v.createTest), c.createTest);
TestRouter.patch('/:id', validate(v.updateTest), authJwt, c.updateTest);
TestRouter.delete('/:id', authJwt, c.deleteTest);

export default TestRouter;
