import { Router } from 'express';
import validate from 'express-validation';
import * as c from './channel.controller';
import v from './channel.validation';
import { authJwt } from '../../config/passport';

const ChannelRouter = Router();

ChannelRouter.get('/:id', authJwt, c.getChannel);
ChannelRouter.post('/', validate(v.createChannel), c.createChannel);
ChannelRouter.patch('/:id', validate(v.updateChannel), authJwt, c.updateChannel);
ChannelRouter.delete('/:id', authJwt, c.deleteChannel);

export default ChannelRouter;
