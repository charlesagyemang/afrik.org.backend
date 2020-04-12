import Joi from 'joi';

export default {
  createTest: {
    body: {
      other: Joi.object().required(),
      // password: Joi.string().min(6).max(60).required(),
    },
  },
  updateTest: {
    body: {
      // email: Joi.string().email(),
      // password: Joi.string().min(6).max(60),
    },
  },
};
