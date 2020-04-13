import HTTPStatus from 'http-status';
import request from 'supertest-as-promised';
import { nuke } from '../../../helpers/test_helpers';
import Response from '../response.model';
import server from '../../../server';

describe('Response:Routes', async () => {
  beforeEach(async () => {
    await nuke();
  });

  it.skip('skip this test', async () => {
    const response = await Response.create({
          //
    });

    const res = await request(server).get('/api/response/');

    expect(res.statusCode).toBe(HTTPStatus.OK);
    expect(res.body.id).toBe(response.id);
  });
});
