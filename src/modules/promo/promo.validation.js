import Joi from 'joi';

export default {
  createPromo: {
    body: {
      label: Joi.string().required(),
      value: Joi.string().required(),
      question: Joi.string().required(),
      wheelId: Joi.string().required(),
      other: Joi.object(),
    },
  },
  updatePromo: {
    body: {
      label: Joi.string(),
      value: Joi.string(),
      question: Joi.string(),
      wheelId: Joi.string(),
      other: Joi.object(),
    },
  },
};
