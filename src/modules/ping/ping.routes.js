// import validate from 'express-validation';
import { Router } from 'express';
import * as c from './ping.controller';

const PingRouter = Router();

PingRouter.get('/', c.pingServer);


export default PingRouter;
