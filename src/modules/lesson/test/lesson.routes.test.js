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
    console.log(channel.body);
  });
});
