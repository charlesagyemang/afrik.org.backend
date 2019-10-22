import HTTPStatus from 'http-status';
import request from 'supertest-as-promised';
import { nuke } from '../../../helpers/test_helpers';
import Channel from '../channel.model';
import server from '../../../server';

describe('Channel:Routes', async () => {
  beforeEach(async () => {
    await nuke();
  });

  it.skip('skip this test', async () => {
    const channel = await Channel.create({
          //
    });

    const res = await request(server).get('/api/channel/');

    expect(res.statusCode).toBe(HTTPStatus.OK);
    expect(res.body.id).toBe(channel.id);
  });
});
