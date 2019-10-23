// import sequelize from 'sequelize';
// import moment from 'moment';
import Random from 'meteor-random';
import HTTPStatus from 'http-status';
import User from './user.model';
import Channel from '../channel/channel.model';
import Course from '../course/course.model';
import Lesson from '../lesson/lesson.model';

import { sendResetEmail } from '../notifications/notifications.controller';


export const getUser = async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) {
    res.sendStatus(HTTPStatus.NOT_FOUND);
    return;
  }
  res.send(user);
};


export const register = async (req, res) => {
  try {
    // console.log('heyyy');
    const user = await User.create({ ...req.body, role: 'user' });
    const u = user.auth();
    // look for courses
    const channel = Channel.findOne({ where: { userId: u.id } }, {
      include: [{
        model: Course,
        include: [{
          model: Lesson,
        }],
      }],
    });

    return res.status(HTTPStatus.CREATED).json({ u, channel });
  } catch (ex) {
    console.log(ex);
  }
  return true;
};

export const login = async (req, res) => {
  try {
    const user = await User.findOne({ where: { email: req.body.email } }, {
      include: [{
        model: Channel,
        include: [{
          model: Course,
          include: [{
            model: Lesson,
          }],
        }],
      }],
    });

    if (!user || !user.authenticate(req.body.password)) {
      return res.status(HTTPStatus.NOT_FOUND).json({ message: 'User not found' });
    }

    const u = user.auth();

    return res.json({ u, user });
  } catch (ex) {
    console.log(ex);
  }
  return true;
};


export const forgotPassword = async (req, res) => {
  try {
    const { email, baseUrl } = req.body;
    const user = await User.findOne({ where: { email } });
    if (!user) return res.sendStatus(HTTPStatus.NOT_FOUND);

    const token = Random.id();
    user.changePasswordToken = token;
    user.changePasswordTokenDate = Date.now();
    await user.save();

    const url = `${baseUrl}?token=${token}`;

    const body = {
      email: user.email,
      name: user.name,
      url,
    };

    sendResetEmail(
      user.email,
      user.name,
      url,
    );

    return res.sendStatus(HTTPStatus.NO_CONTENT).json(body);
  } catch (ex) {
    // if (err) next(err);
    console.log(ex);
  }
  return true;
};


export const requestChangePassword = async (req, res) => {
  try {
    const { password, token } = req.body;

    const user = await User.findOne({ where: { changePasswordToken: token } });

    if (!user) return res.sendStatus(HTTPStatus.NOT_FOUND);

    if (user.changePasswordTokenDate + (24 * 60 * 60 * 1000) > Date.now()) {
      user.password = password;
      user.changePasswordTokenDate = null;
      user.changePasswordTokenDate = 0;
      await user.save();
      return res.sendStatus(HTTPStatus.NO_CONTENT);
    }

    return res.sendStatus(HTTPStatus.NOT_FOUND);
  } catch (ex) {
    // if (err) next(err);
    console.log(ex);
  }
  return true;
};


export const changePassword = async (req, res) => {
  try {
    const { oldPassword, newPassword } = req.body;
    const user = req.user;

    const isValidPassword = user.authenticate(oldPassword);

    if (isValidPassword) {
      user.set('password', newPassword);
      await user.save();
      return res.json({ message: 'Password updated.' });
    }

    return res.status(HTTPStatus.BAD_REQUEST).json({ message: 'Bad Request' });
  } catch (ex) {
    // if (err) next(err);
    console.log(ex);
  }

  return true;
};
