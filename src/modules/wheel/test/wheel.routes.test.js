import HTTPStatus from 'http-status';
import request from 'supertest-as-promised';
import { nuke } from '../../../helpers/test_helpers';
import Wheel from '../wheel.model';
import server from '../../../server';

describe('Wheel:Routes', async () => {
  beforeEach(async () => {
    await nuke();
  });

  it.skip('skip this test', async () => {
    const wheel = await Wheel.create({
          //
    });

    const res = await request(server).get('/api/wheel/');

    expect(res.statusCode).toBe(HTTPStatus.OK);
    expect(res.body.id).toBe(wheel.id);
  });
});
