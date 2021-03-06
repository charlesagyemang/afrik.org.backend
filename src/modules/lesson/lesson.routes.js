import { Router } from 'express';
import validate from 'express-validation';
import * as c from './lesson.controller';
import v from './lesson.validation';
import { authJwt } from '../../config/passport';

const LessonRouter = Router();

LessonRouter.get('/:id', authJwt, c.getLesson);
LessonRouter.post('/:id', validate(v.createLesson), c.createLesson);
LessonRouter.put('/:id', validate(v.updateLesson), authJwt, c.updateLesson);
LessonRouter.post('/bulk.create/:id', validate(v.bulkCreate), c.bulkCreate);
LessonRouter.post('/delete/:id', authJwt, c.deleteLesson);

export default LessonRouter;
