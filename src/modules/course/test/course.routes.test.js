import HTTPStatus from 'http-status';
import request from 'supertest-as-promised';
import { nuke } from '../../../helpers/test_helpers';
import Course from '../course.model';
import server from '../../../server';

describe('Course:Routes', async () => {
  beforeEach(async () => {
    await nuke();
  });

  it.skip('skip this test', async () => {
    const course = await Course.create({
          //
    });

    const res = await request(server).get('/api/course/');

    expect(res.statusCode).toBe(HTTPStatus.OK);
    expect(res.body.id).toBe(course.id);
  });
});
