import Joi from 'joi';

export default {
  createWheel: {
    body: {
      header: Joi.string().required(),
      subHeader: Joi.string().required(),
      dateToBegin: Joi.date().required(),
      dateToEnd: Joi.date().required(),
      other: Joi.object(),
    },
  },
  updateWheel: {
    body: {
      header: Joi.string(),
      subHeader: Joi.string(),
      dateToBegin: Joi.date(),
      dateToEnd: Joi.date(),
      other: Joi.object(),
    },
  },
};
