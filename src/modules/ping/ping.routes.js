// import validate from 'express-validation';
import { Router } from 'express';
import * as c from './ping.controller';

const PingRouter = Router();

PingRouter.get('/', c.pingServer);
PingRouter.post('/get.download.link', c.getDownloadLink);
PingRouter.post('/get.download.links', c.getDownloadLinks);


export default PingRouter;
