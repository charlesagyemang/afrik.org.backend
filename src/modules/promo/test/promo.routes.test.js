import HTTPStatus from 'http-status';
import request from 'supertest-as-promised';
import { nuke } from '../../../helpers/test_helpers';
import Promo from '../promo.model';
import server from '../../../server';

describe('Promo:Routes', async () => {
  beforeEach(async () => {
    await nuke();
  });

  it.skip('skip this test', async () => {
    const promo = await Promo.create({
          //
    });

    const res = await request(server).get('/api/promo/');

    expect(res.statusCode).toBe(HTTPStatus.OK);
    expect(res.body.id).toBe(promo.id);
  });
});
