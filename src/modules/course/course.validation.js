import Joi from 'joi';

export default {
  createCourse: {
    body: {
      title: Joi.string().required(),
      desc: Joi.string(),
      trailerLink: Joi.string(),
      channelId: Joi.string(),
      payload: Joi.object(),
    },
  },
  updateCourse: {
    body: {
      title: Joi.string(),
      desc: Joi.string(),
      trailerLink: Joi.string(),
      channelId: Joi.string(),
      payload: Joi.object(),
    },
  },
  bulkCreate: {
    body: {
      payload: Joi.array(),
    },
  },
};
