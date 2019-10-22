// import HTTPStatus from 'http-status';
import request from 'supertest-as-promised';
import { nuke } from '../../../helpers/test_helpers';
// import Coupon from '../coupon.model';
import server from '../../../server';

describe('Coupon:Routes', async () => {
  beforeEach(async () => {
    await nuke();
  });

  it('Create Coupon', async () => {
    await request(server).post('/api/users/register').send({
      name: 'coole',
      email: 'test@email.com',
      password: 'password',
    });

    const user = await request(server).post('/api/users/login').send({
      email: 'test@email.com',
      password: 'password',
    });

    const auth = { Authorization: `Bearer ${user.body.token}` };

    const res = await request(server).post('/api/coupons/').send({
      ownerDetails: {},
      price: '100',
      courses: ['10', '11', '13'],
      newFields: {},
    }).set(auth);

    console.log(res.body);

    // expect(res.statusCode).toBe(HTTPStatus.OK);
    // expect(res.body.id).toBe(coupon.id);
  });
});
