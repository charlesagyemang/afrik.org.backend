import { Router } from 'express';
import validate from 'express-validation';
import * as c from './course.controller';
import v from './course.validation';
import { authJwt } from '../../config/passport';

const CourseRouter = Router();

CourseRouter.get('/:id', authJwt, c.getCourse);
CourseRouter.post('/', validate(v.createCourse), c.createCourse);
CourseRouter.post('/edit/:id', validate(v.updateCourse), authJwt, c.updateCourse);
CourseRouter.post('/delete/:id', authJwt, c.deleteCourse);

export default CourseRouter;
