import HTTPStatus from 'http-status';
import request from 'supertest-as-promised';
import { nuke } from '../../../helpers/test_helpers';
import Test from '../test.model';
import server from '../../../server';

describe('Test:Routes', async () => {
  beforeEach(async () => {
    await nuke();
  });

  it.skip('skip this test', async () => {
    const test = await Test.create({
          //
    });

    const res = await request(server).get('/api/test/');

    expect(res.statusCode).toBe(HTTPStatus.OK);
    expect(res.body.id).toBe(test.id);
  });
});
