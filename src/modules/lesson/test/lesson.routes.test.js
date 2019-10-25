// import HTTPStatus from 'http-status';
import request from 'supertest-as-promised';
import { nuke } from '../../../helpers/test_helpers';
// import Course from '../course.model';
import server from '../../../server';

describe('Lesson:Routes', async () => {
  beforeEach(async () => {
    await nuke();
  });

  it('Create A Lesson', async () => {
    const user = await request(server).post('/api/users/register').send({
      name: 'coole',
      email: 'test@email.com',
      password: 'password',
    });

    const channel = await request(server).post('/api/channels/').send({
      userId: user.body.id,
      payload: {},
      name: 'pianoafrik',
      link: 'https:youtube.com/pianoafrik',
    });

    const final = await request(server).post('/api/users/login').send({
      email: 'test@email.com',
      password: 'password',
    });

    const course = await request(server).post('/api/courses/').send({
      channelId: channel.body.id,
      payload: {},
      title: 'Course One',
      desc: 'Course One Description',
      trailerLink: 'https://www.google.com',
    });

    const lesson = await request(server).post('/api/lessons/').send({
      courseId: course.body.id,
      payload: {},
      title: 'Lesson One',
      desc: 'Lesson One Description',
      youtubeLink: 'https://www.google.com',
    });

    console.log(final.body);
  });


  it.only('Edit A Lesson', async () => {
    const user = await request(server).post('/api/users/register').send({
      name: 'coole',
      email: 'test@email.com',
      password: 'password',
    });

    const channel = await request(server).post('/api/channels/').send({
      userId: user.body.u.id,
      payload: {},
      name: 'pianoafrik',
      link: 'https:youtube.com/pianoafrik',
    });

    const final = await request(server).post('/api/users/login').send({
      email: 'test@email.com',
      password: 'password',
    });

    const course = await request(server).post('/api/courses/').send({
      channelId: channel.body.id,
      payload: {},
      title: 'Course One',
      desc: 'Course One Description',
      trailerLink: 'https://www.google.com',
    });

    const lesson = await request(server).post('/api/lessons/').send({
      courseId: course.body.id,
      payload: {},
      title: 'Lesson One',
      desc: 'Lesson One Description',
      youtubeLink: 'https://www.google.com',
    });

    console.log(lesson.statusCode);
  });
});
