import HTTPStatus from 'http-status';
import request from 'supertest-as-promised';
import { nuke } from '../../../helpers/test_helpers';
import server from '../../../server';

describe('Channel:Routes', async () => {
  beforeEach(async () => {
    await nuke();
  });

  it('skip this test', async () => {
    const user = await request(server).post('/api/users/register').send({
      name: 'coole',
      email: 'test@email.com',
      password: 'password',
    });
    const auth = { Authorization: `Bearer ${user.body.u.token}` };
    const { body } = await request(server).post('/api/channels/').send({
      userId: user.body.u.id,
      payload: {},
      name: 'pianoafrik',
      link: 'https:youtube.com/pianoafrik',
    });


    const res = await request(server).get(`/api/channels/${body.id}`).set(auth);

    // console.log(res.body);
    //
    expect(res.statusCode).toBe(HTTPStatus.OK);
    expect(res.body).toHaveProperty('id');
  });
});
