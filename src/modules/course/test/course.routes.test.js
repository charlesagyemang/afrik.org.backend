// import HTTPStatus from 'http-status';
import request from 'supertest-as-promised';
import { nuke } from '../../../helpers/test_helpers';
// import Course from '../course.model';
import server from '../../../server';

const formBody = (channelID) => {
  return [
    {
      "id": 'ajhvcshdagfscgfasdeqweqwe',
      "channelId": channelID,
      "payload": {},
      "title": 'Course One',
      "desc": 'Course One Description',
      "trailerLink": 'https://www.google.com',
    },
    {
      "id": 'ajhvcshdagfscgfasd123123',
      "channelId": channelID,
      "payload": {},
      "title": 'Course One',
      "desc": 'Course One Description',
      "trailerLink": 'https://www.google.com',
    },{
      "id": 'ajhvcshdagfscgsdadasdfsdffasd',
      "channelId": channelID,
      "payload": {},
      "title": 'Course One',
      "desc": 'Course One Description',
      "trailerLink": 'https://www.google.com',
    },{
      "id": 'ajhvcshdagfssdacgfasd123123',
      "channelId": channelID,
      "payload": {},
      "title": 'Course One',
      "desc": 'Course One Description',
      "trailerLink": 'https://www.google.com',
    },
  ]
}

describe('Course:Routes', async () => {
  beforeEach(async () => {
    await nuke();
  });

  it('Create A Course', async () => {
    const user = await request(server).post('/api/users/register').send({
      name: 'coole',
      email: 'test@email.com',
      password: 'password',
    });

    const channel = await request(server).post('/api/channels/').send({
      userId: user.body.u.id,
      payload: {},
      name: 'pianoafrik',
      link: 'https:youtube.com/pianoafrik',
    });

    const payload = formBody(channel.body.id);

    const res = await request(server).post(`api/courses/bulk.create/${channel.body.id}`).send({
      payload,
    });


    // const course = await request(server).post('/api/courses/').send({
    //   "id": 'ajhvcshdagfscgfasd',
    //   "channelId": channel.body.id,
    //   "payload": {},
    //   "title": 'Course One',
    //   "desc": 'Course One Description',
    //   "trailerLink": 'https://www.google.com',
    // });
    // console.log(course.body);

    // const res = await request(server).post('api/ping/shatta.bundles').send({
    //   email: 'mmm@gmail.com',
    //   password: 'password',
    //   channelName: 'channelName',
    //   channelLink: 'channelLink',
    //   payload: {},
    // });
    //
    console.log(res.body);
  });
});
