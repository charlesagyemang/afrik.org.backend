import { Router } from 'express';
import { version } from '../../../package.json';
import UserRouter from '../user/user.routes';
import ChannelRouter from '../channel/channel.routes';
// import { testDownloadApi } from '../cronJobs/cronJobs.controller';
import CourseRouter from '../course/course.routes';
import LessonRouter from '../lesson/lesson.routes';
import CouponRouter from '../coupon/coupon.routes';
import PingRouter from '../ping/ping.routes';


// Declare Router
const apiRouter = Router();

// get version number of  the api
apiRouter.get('/', (req, res) => {
  res.json({
    version,
  });
});

// testDownloadApi('https://www.youtube.com/watch?v=Ffb96rVZA5s', (data) => {
//   console.log(data);
// });

// Plug module routers
apiRouter.use('/users', UserRouter);

apiRouter.use('/channels', ChannelRouter);
apiRouter.use('/courses', CourseRouter);
apiRouter.use('/lessons', LessonRouter);
apiRouter.use('/coupons', CouponRouter);
apiRouter.use('/ping', PingRouter);


//

export default apiRouter;
