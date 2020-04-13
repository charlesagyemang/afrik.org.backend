import { Router } from 'express';
import validate from 'express-validation';
import * as c from './promo.controller';
import v from './promo.validation';
import { authJwt } from '../../config/passport';

const PromoRouter = Router();

PromoRouter.get('/:id', authJwt, c.getPromo);
PromoRouter.post('/', validate(v.createPromo), c.createPromo);
PromoRouter.patch('/:id', validate(v.updatePromo), authJwt, c.updatePromo);
PromoRouter.delete('/:id', authJwt, c.deletePromo);

export default PromoRouter;
