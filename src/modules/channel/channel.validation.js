import Joi from 'joi';

export default {
  createChannel: {
    body: {
      userId: Joi.string().required(),
      payload: Joi.object(),
      name: Joi.string().required(),
      link: Joi.string().required(),
    },
  },
  updateChannel: {
    body: {
      userId: Joi.string(),
      payload: Joi.string(),
      name: Joi.string(),
      link: Joi.string(),
    },
  },
};
