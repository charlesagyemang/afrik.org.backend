import Joi from 'joi';

export default {
  createResponse: {
    body: {
      // email: Joi.string().email().required(),
      customerName: Joi.string().required(),
      customerPhone: Joi.string().required(),
      customerEmail: Joi.string().email(),
      wheelId: Joi.string().required(),
      promoId: Joi.string().required(),
      other: Joi.object(),
    },
  },
  updateResponse: {
    body: {
      // emai
      customerName: Joi.string(),
      customerPhone: Joi.string(),
      customerEmail: Joi.string(),
      wheelId: Joi.string(),
      promoId: Joi.string(),
      other: Joi.object(),
    },
  },
};
