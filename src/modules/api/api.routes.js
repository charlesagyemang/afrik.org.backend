import { Router } from 'express';
import { version } from '../../../package.json';
import UserRouter from '../user/user.routes';
import ChannelRouter from '../channel/channel.routes';
import { tryJobber } from '../cronJobs/cronJobs.controller';
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


// Plug module routers
apiRouter.use('/users', UserRouter);

apiRouter.use('/channels', ChannelRouter);
apiRouter.use('/courses', CourseRouter);
apiRouter.use('/lessons', LessonRouter);
apiRouter.use('/coupons', CouponRouter);
apiRouter.use('/ping', PingRouter);


//= ==== Testing Live =====//
// testDownloadApi('https://www.youtube.com/watch?v=Ffb96rVZA5s', (data) => {
//   console.log(data);
// });
tryJobber();

/*
const mod = [
  {
    title: 'Kwaku Menu',
    youtubeLink: 'https://www.youtube.com/watch?v=-QLurTxhGdk',
  },
  {
    title: 'WO Ho Ahi',
    youtubeLink: 'https://www.youtube.com/watch?v=jT33MaqgrJE',
  },
  {
    title: 'Nana Yeboa',
    youtubeLink: 'https://www.youtube.com/watch?v=7Rorme93nLw',
  },
  {
    title: 'Santasi Akosa',
    youtubeLink: 'https://www.youtube.com/watch?v=8F2s8PcG3pw',
  },
  {
    title: 'ALU',
    youtubeLink: 'https://www.youtube.com/watch?v=2qNoOF8yskA',
  },
  {
    title: 'Nana Yeboa 2',
    youtubeLink: 'https://www.youtube.com/watch?v=F7jxjR6LYo4',
  },
  {
    title: 'Kinaata',
    youtubeLink: 'https://www.youtube.com/watch?v=Go68g-DICA8',
  },
];
*/

// testDownloadApi2(mod, (obj) => {
//   console.log(obj);
// });


//

export default apiRouter;
