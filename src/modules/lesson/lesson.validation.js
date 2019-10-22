import Joi from 'joi';

export default {
  createLesson: {
    body: {
      title: Joi.string().required(),
      desc: Joi.string(),
      youtubeLink: Joi.string(),
      courseId: Joi.string().required(),
      payload: Joi.object(),
    },
  },
  updateLesson: {
    body: {
      title: Joi.string(),
      desc: Joi.string(),
      youtubeLink: Joi.string(),
      courseId: Joi.string(),
      payload: Joi.object(),
    },
  },
};
