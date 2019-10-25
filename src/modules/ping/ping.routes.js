// import validate from 'express-validation';
import { Router } from 'express';
import * as c from './ping.controller';
// import { authJwt } from '../../config/passport';

const PingRouter = Router();

PingRouter.get('/', c.pingServer);
PingRouter.post('/get.download.link', c.getDownloadLink);
PingRouter.post('/get.download.links', c.getDownloadLinks);
PingRouter.post('/job', c.jobRun);
PingRouter.post('/piano.afrik.download.portal', c.cookShit);
// PingRouter.post('/teletabies', c.teletabies);


export default PingRouter;
