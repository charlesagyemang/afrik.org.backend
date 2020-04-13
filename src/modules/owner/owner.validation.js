import Joi from 'joi';

export default {
  createOwner: {
    body: {
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      phoneNumber: Joi.string().required(),
      other: Joi.object(),
    },
  },
  updateOwner: {
    body: {
      name: Joi.string(),
      email: Joi.string().email(),
      phoneNumber: Joi.string(),
      other: Joi.object(),
    },
  },
};
