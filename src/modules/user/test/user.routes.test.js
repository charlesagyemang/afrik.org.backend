import HTTPStatus from 'http-status';
import request from 'supertest-as-promised';
import { nuke } from '../../../helpers/test_helpers';
// import User from '../user.model';
import server from '../../../server';

describe('User::Routes', async () => {
  beforeEach(async () => {
    await nuke();
  });

  it('should register and login successfully', async () => {
    await request(server).post('/api/users/register').send({
      name: 'coole',
      email: 'test@email.com',
      password: 'password',
    });

    const res = await request(server).post('/api/users/login').send({
      email: 'test@email.com',
      password: 'password',
    });

    console.log(res.body);
    expect(res.statusCode).toBe(HTTPStatus.OK);
    expect(res.body).toHaveProperty('id');
    expect(res.body).toHaveProperty('token');
    expect(res.body).toHaveProperty('channels');
  });
});
