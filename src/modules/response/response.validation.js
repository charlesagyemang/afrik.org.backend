import Joi from 'joi';

export default {
  createResponse: {
    body: {
      // email: Joi.string().email().required(),
      // password: Joi.string().min(6).max(60).required(),
    },
  },
  updateResponse: {
    body: {
      // email: Joi.string().email(),
      // password: Joi.string().min(6).max(60),
    },
  },
};
