// import HTTPStatus from 'http-status';
import request from 'supertest-as-promised';
import { nuke } from '../../../helpers/test_helpers';
// import Course from '../course.model';
import server from '../../../server';

describe('Course:Routes', async () => {
  beforeEach(async () => {
    await nuke();
  });

  it('Should Return  A Link For Download', async () => {
    const res = await request(server).post('/api/ping/get.download.link').send({
      url: 'https://www.youtube.com/watch?v=2Sttgg7J-rc',
    });

    console.log(res.body);
  });
});
