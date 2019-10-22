/* eslint no-param-reassign: ["error", { "props": false }] */

import Sequelize from 'sequelize';
import { hashSync, compareSync } from 'bcrypt-nodejs';
import jwt from 'jsonwebtoken';

import sequelize from '../../db';
import constants from '../../config/constants';

export const USER_MODEL = 'users';

const User = sequelize.define(USER_MODEL, {
  id: { type: Sequelize.STRING, primaryKey: true },

  name: { type: Sequelize.STRING, allowNull: false },
  email: { type: Sequelize.STRING, allowNull: false, unique: true },
  password: { type: Sequelize.STRING },

  role: { type: Sequelize.STRING, allowNull: true },
  firstName: { type: Sequelize.STRING, allowNull: true },
  status: { type: Sequelize.STRING, allowNull: true },
  phoneNumber: { type: Sequelize.STRING, allowNull: true },
  lastName: { type: Sequelize.STRING, allowNull: true },
  age: { type: Sequelize.STRING, allowNull: true },

  changePasswordToken: { type: Sequelize.STRING, unique: true },
  changePasswordTokenDate: { type: Sequelize.BIGINT },

  createdAt: { allowNull: false, type: Sequelize.DATE },
  updatedAt: { allowNull: false, type: Sequelize.DATE },

});

User.beforeSave((user) => {
  if (user.changed('password')) {
    user.password = user._hashPassword(user.password);
  }
});
User.prototype._createToken = function createToken() {
  return jwt.sign({
    id: this.id,
  }, constants.JWT_SECRET, {
    expiresIn: '8h',
  });
};

User.prototype.auth = function auth() {
  return {
    ...this.get({ plain: true }),
    password: undefined,
    token: this._createToken(),
  };
};

User.prototype._hashPassword = function _hashPassword(password) {
  return hashSync(password);
};

User.prototype.authenticate = function authenticate(password) {
  return compareSync(password, this.password);
};

User.prototype.toJson = function toJson() {
  return {
    ...this.get({ plain: true }),
    password: undefined,
    changePasswordToken: undefined,
    changePasswordTokenDate: undefined,
  };
};

export default User;
