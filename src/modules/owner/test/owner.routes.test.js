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

  it.skip('Delete Owner Successfully', async () => {
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

  it.skip('Create A Wheel Successfully And Get All Wheels belonging To A Specific Owner', async () => {
    // create an owner
    const res = await request(server).post('/api/owners/').send({
      name: 'Charles Opoku Agyemang',
      email: 'micnkru@gmail.com',
      phoneNumber: '0233445566',
      other: {

      },
    });


    // create a wheel
    await request(server).post('/api/wheels/').send({
      header: 'Koobi Ti Promotions',
      subHeader: 'Kumasi Event',
      dateToBegin: Date.now(),
      dateToEnd: Date.now(),
      ownerId: res.body.id,
      other: {

      },
    });

    const _res = await request(server).post('/api/wheels/all').send({});

    console.log(_res.body);
  });

  it.skip('Edit A Wheel Successfully', async () => {
    // create an owner
    const res = await request(server).post('/api/owners/').send({
      name: 'Charles Opoku Agyemang',
      email: 'micnkru@gmail.com',
      phoneNumber: '0233445566',
      other: {

      },
    });


    // create a wheel
    const wheel = await request(server).post('/api/wheels/').send({
      header: 'Koobi Ti Promotions',
      subHeader: 'Kumasi Event',
      dateToBegin: Date.now(),
      dateToEnd: Date.now(),
      ownerId: res.body.id,
      other: {

      },
    });

    // edit wheel
    await request(server).patch(`/api/wheels/${wheel.body.id}`).send({
      other: {
        uniqueId: 'yey882gTR',
      },
    });

    const _res = await request(server).get(`/api/owners/${res.body.id}`);

    console.log(_res.body);
  });


  it.skip('Delete A Wheel Successfully', async () => {
    // create an owner
    const res = await request(server).post('/api/owners/').send({
      name: 'Charles Opoku Agyemang',
      email: 'micnkru@gmail.com',
      phoneNumber: '0233445566',
      other: {

      },
    });


    // create a wheel
    const wheel = await request(server).post('/api/wheels/').send({
      header: 'Koobi Ti Promotions',
      subHeader: 'Kumasi Event',
      dateToBegin: Date.now(),
      dateToEnd: Date.now(),
      ownerId: res.body.id,
      other: {

      },
    });

    // edit wheel
    await request(server).delete(`/api/wheels/${wheel.body.id}`);

    const _res = await request(server).get(`/api/owners/${res.body.id}`);

    console.log(_res.body);
  });


  it.skip('Create Promo Successfully', async () => {
    // create an owner
    const res = await request(server).post('/api/owners/').send({
      name: 'Charles Opoku Agyemang',
      email: 'micnkru@gmail.com',
      phoneNumber: '0233445566',
      other: {

      },
    });


    // create a wheel
    const wheel = await request(server).post('/api/wheels/').send({
      header: 'Koobi Ti Promotions',
      subHeader: 'Kumasi Event',
      dateToBegin: Date.now(),
      dateToEnd: Date.now(),
      ownerId: res.body.id,
      other: {

      },
    });

    // create Promo
    await request(server).post('/api/promos/').send({
      label: 'Label',
      value: '2',
      question: 'Question',
      wheelId: wheel.body.id,
      other: {

      },
    });

    const _res = await request(server).get(`/api/wheels/${wheel.body.id}`);

    console.log(_res.body);
  });

  it.skip('Edit Promos Successfully', async () => {
    // create an owner
    const res = await request(server).post('/api/owners/').send({
      name: 'Charles Opoku Agyemang',
      email: 'micnkru@gmail.com',
      phoneNumber: '0233445566',
      other: {

      },
    });


    // create a wheel
    const wheel = await request(server).post('/api/wheels/').send({
      header: 'Koobi Ti Promotions',
      subHeader: 'Kumasi Event',
      dateToBegin: Date.now(),
      dateToEnd: Date.now(),
      ownerId: res.body.id,
      other: {

      },
    });

    // create Promo
    const promo = await request(server).post('/api/promos/').send({
      label: 'Label',
      value: '2',
      question: 'Question',
      wheelId: wheel.body.id,
      other: {

      },
    });

    await request(server).patch(`/api/promos/${promo.body.id}`).send({
      label: 'label Edited',
      other: {
        uniqueId: 'yey882gTR',
      },
    });

    const _res = await request(server).get(`/api/wheels/${wheel.body.id}`);

    console.log(_res.body);
  });

  it.skip('Delete Promos Successfully', async () => {
    // create an owner
    const res = await request(server).post('/api/owners/').send({
      name: 'Charles Opoku Agyemang',
      email: 'micnkru@gmail.com',
      phoneNumber: '0233445566',
      other: {

      },
    });


    // create a wheel
    const wheel = await request(server).post('/api/wheels/').send({
      header: 'Koobi Ti Promotions',
      subHeader: 'Kumasi Event',
      dateToBegin: Date.now(),
      dateToEnd: Date.now(),
      ownerId: res.body.id,
      other: {

      },
    });

    // create Promo
    const promo = await request(server).post('/api/promos/').send({
      label: 'Label',
      value: '2',
      question: 'Question',
      wheelId: wheel.body.id,
      other: {

      },
    });

    await request(server).delete(`/api/promos/${promo.body.id}`);

    const _res = await request(server).get(`/api/wheels/${wheel.body.id}`);

    console.log(_res.body);
  });

  it.only('Create Response Successfully', async () => {
    // create an owner
    const res = await request(server).post('/api/owners/').send({
      name: 'Charles Opoku Agyemang',
      email: 'micnkru@gmail.com',
      phoneNumber: '0233445566',
      other: {

      },
    });


    // create a wheel
    const wheel = await request(server).post('/api/wheels/').send({
      header: 'Koobi Ti Promotions',
      subHeader: 'Kumasi Event',
      dateToBegin: Date.now(),
      dateToEnd: Date.now(),
      ownerId: res.body.id,
      other: {

      },
    });

    // create Promo
    const promo = await request(server).post('/api/promos/').send({
      label: 'Label',
      value: '2',
      question: 'Question',
      wheelId: wheel.body.id,
      other: {

      },
    });

    // create Response
    await request(server).post('/api/responses/').send({
      customerName: 'customerName',
      customerPhone: '0541348180',
      customerEmail: 'micnkru@gmail.com',
      wheelId: wheel.body.id,
      promoId: promo.body.id,
      other: {
        message: 'hi, you have won sos and so',
      },
    });

    const _res = await request(server).get(`/api/wheels/${wheel.body.id}`);

    console.log(_res.body);
  });

  it.skip('Edit Response Successfully', async () => {
    // create an owner
    const res = await request(server).post('/api/owners/').send({
      name: 'Charles Opoku Agyemang',
      email: 'micnkru@gmail.com',
      phoneNumber: '0233445566',
      other: {

      },
    });


    // create a wheel
    const wheel = await request(server).post('/api/wheels/').send({
      header: 'Koobi Ti Promotions',
      subHeader: 'Kumasi Event',
      dateToBegin: Date.now(),
      dateToEnd: Date.now(),
      ownerId: res.body.id,
      other: {

      },
    });

    // create Promo
    const promo = await request(server).post('/api/promos/').send({
      label: 'Label',
      value: '2',
      question: 'Question',
      wheelId: wheel.body.id,
      other: {

      },
    });

    // create Response
    const response = await request(server).post('/api/responses/').send({
      customerName: 'customerName',
      customerPhone: '233445522',
      customerEmail: 'micnkru@gmail.com',
      wheelId: wheel.body.id,
      promoId: promo.body.id,
      other: {

      },
    });

    await request(server).patch(`/api/responses/${response.body.id}`).send({
      customerName: 'Akumdobe',
      other: {
        uniqueId: 'yey882gTR',
      },
    });

    const _res = await request(server).get(`/api/wheels/${wheel.body.id}`);

    console.log(_res.body);
  });

  it.skip('Delete Response Successfully', async () => {
    // create an owner
    const res = await request(server).post('/api/owners/').send({
      name: 'Charles Opoku Agyemang',
      email: 'micnkru@gmail.com',
      phoneNumber: '0233445566',
      other: {

      },
    });


    // create a wheel
    const wheel = await request(server).post('/api/wheels/').send({
      header: 'Koobi Ti Promotions',
      subHeader: 'Kumasi Event',
      dateToBegin: Date.now(),
      dateToEnd: Date.now(),
      ownerId: res.body.id,
      other: {

      },
    });

    // create Promo
    const promo = await request(server).post('/api/promos/').send({
      label: 'Label',
      value: '2',
      question: 'Question',
      wheelId: wheel.body.id,
      other: {

      },
    });

    // create Response
    const response = await request(server).post('/api/responses/').send({
      customerName: 'customerName',
      customerPhone: '233445522',
      customerEmail: 'micnkru@gmail.com',
      wheelId: wheel.body.id,
      promoId: promo.body.id,
      other: {

      },
    });

    await request(server).delete(`/api/responses/${response.body.id}`);

    const _res = await request(server).get(`/api/wheels/${wheel.body.id}`);

    console.log(_res.body);
  });

  it.skip('Test Cascade Successfully', async () => {
    // create an owner
    const res = await request(server).post('/api/owners/').send({
      name: 'Charles Opoku Agyemang',
      email: 'micnkru@gmail.com',
      phoneNumber: '0233445566',
      other: {

      },
    });


    // create a wheel
    const wheel = await request(server).post('/api/wheels/').send({
      header: 'Koobi Ti Promotions',
      subHeader: 'Kumasi Event',
      dateToBegin: Date.now(),
      dateToEnd: Date.now(),
      ownerId: res.body.id,
      other: {

      },
    });

    // create Promo
    const promo = await request(server).post('/api/promos/').send({
      label: 'Label',
      value: '2',
      question: 'Question',
      wheelId: wheel.body.id,
      other: {

      },
    });

    // create Response
    const response = await request(server).post('/api/responses/').send({
      customerName: 'customerName',
      customerPhone: '233445522',
      customerEmail: 'micnkru@gmail.com',
      wheelId: wheel.body.id,
      promoId: promo.body.id,
      other: {

      },
    });

    /*
    await request(server).delete(`/api/responses/${response.body.id}`);

    const _res = await request(server).get(`/api/wheels/${wheel.body.id}`);

    console.log(_res.body);
    */


    console.log('PROMO: ', promo.body);
    console.log('RESPONSE: ', response.body);

    // delete Promo;
    await request(server).delete(`/api/wheels/${wheel.body.id}`);
    //
    const _res = await request(server).get(`/api/responses/${response.body.id}`);
    const res_ = await request(server).get(`/api/promos/${promo.body.id}`);
    //
    console.log('RESPONSE UNDER: ', _res.body);
    console.log('PROMO UNDER: ', res_.body);
  });
});
