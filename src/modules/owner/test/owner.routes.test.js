import HTTPStatus from 'http-status';
import request from 'supertest-as-promised';
import { nuke } from '../../../helpers/test_helpers';
import server from '../../../server';

describe('Owner:Routes', async () => {
  beforeEach(async () => {
    await nuke();
  });

  it.skip('Create And Get Created Owner Successfully', async () => {
    const res = await request(server).post('/api/owners/').send({
      name: 'Charles Opoku Agyemang',
      email: 'micnkru@gmail.com',
      phoneNumber: '0233445566',
      other: {

      },
    });

    const _res = await request(server).get(`/api/owners/${res.body.id}`);


    expect(_res.statusCode).toBe(HTTPStatus.OK);
    expect(_res.body.id).toBe(res.body.id);
  });

  it.skip('Edit Owners Successfully', async () => {
    const res = await request(server).post('/api/owners/').send({
      name: 'Charles Opoku Agyemang',
      email: 'micnkru@gmail.com',
      phoneNumber: '0233445566',
      other: {

      },
    });

    const _res = await request(server).patch(`/api/owners/${res.body.id}`).send({
      other: {
        status: 'ACTIVE',
      },
    });


    expect(_res.statusCode).toBe(HTTPStatus.OK);
    expect(_res.body.other).toHaveProperty('status');
  });

  it.only('Delete Owner Successfully', async () => {
    const res = await request(server).post('/api/owners/').send({
      name: 'Charles Opoku Agyemang',
      email: 'micnkru@gmail.com',
      phoneNumber: '0233445566',
      other: {

      },
    });

    const _res = await request(server).delete(`/api/owners/${res.body.id}`);


    expect(_res.statusCode).toBe(HTTPStatus.NO_CONTENT);
  });
});
