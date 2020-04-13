import { Router } from 'express';
import validate from 'express-validation';
import * as c from './owner.controller';
import v from './owner.validation';
// import { authJwt } from '../../config/passport';

const OwnerRouter = Router();

OwnerRouter.get('/:id', c.getOwner);
OwnerRouter.post('/', validate(v.createOwner), c.createOwner);
OwnerRouter.post('/all', c.getAllOwners);
OwnerRouter.patch('/:id', validate(v.updateOwner), c.updateOwner);
OwnerRouter.delete('/:id', c.deleteOwner);

export default OwnerRouter;
