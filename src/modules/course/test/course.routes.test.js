// import HTTPStatus from 'http-status';
import request from 'supertest-as-promised';
import { nuke } from '../../../helpers/test_helpers';
// import Course from '../course.model';
import server from '../../../server';

describe('Course:Routes', async () => {
  beforeEach(async () => {
    await nuke();
  });

  it('Create A Course', async () => {
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

    const course = await request(server).post('/api/courses/').send({
      channelId: channel.body.id,
      payload: {},
      title: 'Course One',
      desc: 'Course One Description',
      trailerLink: 'https://www.google.com',
    });
    console.log(course.body);
  });
});
