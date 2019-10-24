// import HTTPStatus from 'http-status';
import request from 'supertest-as-promised';
import { nuke } from '../../../helpers/test_helpers';
// import Course from '../course.model';
import server from '../../../server';

const mod = [
  {
    title: 'Kwaku Menu',
    youtubeLink: 'https://www.youtube.com/watch?v=-QLurTxhGdk',
  },
  {
    title: 'WO Ho Ahi',
    youtubeLink: 'https://www.youtube.com/watch?v=jT33MaqgrJE',
  },
  {
    title: 'Nana Yeboa',
    youtubeLink: 'https://www.youtube.com/watch?v=7Rorme93nLw',
  },
  {
    title: 'Santasi Akosa',
    youtubeLink: 'https://www.youtube.com/watch?v=8F2s8PcG3pw',
  },
  {
    title: 'ALU',
    youtubeLink: 'https://www.youtube.com/watch?v=2qNoOF8yskA',
  },
  {
    title: 'Nana Yeboa 2',
    youtubeLink: 'https://www.youtube.com/watch?v=F7jxjR6LYo4',
  },
  {
    title: 'Kinaata',
    youtubeLink: 'https://www.youtube.com/watch?v=Go68g-DICA8',
  },
];

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

  it.only('Should Return Download Links For Array', async () => {
    const res = await request(server).post('/api/ping/get.download.links').send({
      payload: mod,
    });

    console.log(res.body);
  });
});
