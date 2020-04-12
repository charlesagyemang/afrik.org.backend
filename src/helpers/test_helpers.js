import request from 'supertest-as-promised';
import User from '../modules/user/user.model';
import Channel from '../modules/channel/channel.model';
import Course from '../modules/course/course.model';
import Lesson from '../modules/lesson/lesson.model';
import Coupon from '../modules/coupon/coupon.model';
import Radio from '../modules/radio/radio.model';


// adding a comp parameter to solve async issues
export const login = async (server) => {
  const user = await User.create({ email: 'user@email.com', password: 'password' });
  const res = await request(server).post('/api/ampuser/login').send({
    email: user.email,
    password: user.password,
  });
  return {
    auth: { Authorization: `Bearer ${res.body.token}` },
    user,
  };
};

export const nuke = async () => {
  await Radio.destroy({ where: {} });
  await Coupon.destroy({ where: {} });
  await Lesson.destroy({ where: {} });
  await Course.destroy({ where: {} });
  await Channel.destroy({ where: {} });
  await User.destroy({ where: {} });
};
