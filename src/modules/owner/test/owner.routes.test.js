import HTTPStatus from 'http-status';
import request from 'supertest-as-promised';
import { nuke } from '../../../helpers/test_helpers';
import Owner from '../owner.model';
import server from '../../../server';

describe('Owner:Routes', async () => {
  beforeEach(async () => {
    await nuke();
  });

  it.skip('skip this test', async () => {
    const owner = await Owner.create({
          //
    });

    const res = await request(server).get('/api/owner/');

    expect(res.statusCode).toBe(HTTPStatus.OK);
    expect(res.body.id).toBe(owner.id);
  });
});
