import Joi from 'joi';

export default {
  createCoupon: {
    body: {
      ownerDetails: Joi.object().required(),
      price: Joi.string().required(),
      courses: Joi.array().required(),
      newFields: Joi.object().required(),
      channelId: Joi.string().required(),
    },
  },
  updateCoupon: {
    body: {
      ownerDetails: Joi.object(),
      price: Joi.string(),
      newFields: Joi.object(),
      status: Joi.string(),
      expirationDate: Joi.date(),
    },
  },
};
