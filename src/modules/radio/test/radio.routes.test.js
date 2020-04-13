import HTTPStatus from 'http-status';
import request from 'supertest-as-promised';
import { nuke } from '../../../helpers/test_helpers';
import server from '../../../server';

describe('Radio:Routes', async () => {
  beforeEach(async () => {
    await nuke();
  });

  it.skip('Create  And Get Radio Staion Successfully', async () => {
    const ress = await request(server).post('/api/radios/').send(
      {
        name: 'AGBA RAdio',
        streamingLink: 'https://hey.com',
        other: {},
      });

    const res = await request(server).get(`/api/radios/${ress.body.id}`);
    //

    expect(res.statusCode).toBe(HTTPStatus.OK);
    expect(res.body.id).toBe(ress.body.id);
  });

  it.skip('Edit Radio Staion Successfully', async () => {
    const ress = await request(server).post('/api/radios/').send(
      {
        name: 'AGBA RAdio',
        streamingLink: 'https://hey.com',
        other: {},
      });

    const res = await request(server).post(`/api/radios/edit/${ress.body.id}`).send({
      other: { kumi: 'guitarr' },
    });
    //

    console.log(res.body);

    // expect(res.statusCode).toBe(HTTPStatus.OK);
    // expect(res.body.id).toBe(ress.body.id);
  });


  it.skip('Create  And Get Radio Staion Successfully', async () => {
    await request(server).post('/api/radios/').send(
      {
        name: 'AGBA RAdio',
        streamingLink: 'https://hey.com',
        other: {},
      });
    await request(server).post('/api/radios/').send(
      {
        name: 'AGBA RAdio',
        streamingLink: 'https://hey.com',
        other: {},
      });
    await request(server).post('/api/radios/').send(
      {
        name: 'AGBA RAdio',
        streamingLink: 'https://hey.com',
        other: {},
      });
    await request(server).post('/api/radios/').send(
      {
        name: 'AGBA RAdio',
        streamingLink: 'https://hey.com',
        other: {},
      });
    await request(server).post('/api/radios/').send(
      {
        name: 'AGBA RAdio',
        streamingLink: 'https://hey.com',
        other: {},
      });

    const res = await request(server).post('/api/radios/all').send({});
    //
    console.log(res.body);
    // expect(res.statusCode).toBe(HTTPStatus.OK);
    // expect(res.body.id).toBe(ress.body.id);
  });

  it.only('Get Agba Details', async () => {
    const res = await request(server).post('/api/radios/agba-details/').send({});
    //

    console.log(res.body);

    // expect(res.statusCode).toBe(HTTPStatus.OK);
    // expect(res.body.id).toBe(ress.body.id);
  });
});
