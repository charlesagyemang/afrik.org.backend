import HTTPStatus from 'http-status';
import request from 'supertest-as-promised';
import { nuke } from '../../../helpers/test_helpers';
import Lesson from '../lesson.model';
import server from '../../../server';

describe('Lesson:Routes', async () => {
  beforeEach(async () => {
    await nuke();
  });

  it.skip('skip this test', async () => {
    const lesson = await Lesson.create({
          //
    });

    const res = await request(server).get('/api/lesson/');

    expect(res.statusCode).toBe(HTTPStatus.OK);
    expect(res.body.id).toBe(lesson.id);
  });
});
