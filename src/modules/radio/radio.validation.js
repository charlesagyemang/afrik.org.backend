import Joi from 'joi';

export default {
  createRadio: {
    body: {
      name: Joi.string().required(),
      streamingLink: Joi.string().required(),
      other: Joi.object(),
    },
  },
  updateRadio: {
    body: {
      // email: Joi.string().email(),
      // password: Joi.string().min(6).max(60),
    },
  },
};
