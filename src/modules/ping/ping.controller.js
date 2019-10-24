// import moment from 'moment';
// import { Op } from 'sequelize';
import HTTPStatus from 'http-status';
import { testDownloadApi, testDownloadApi2 } from '../cronJobs/cronJobs.controller';
// import User from '../user/user.model';


export const pingServer = async (req, res) => {
  const download = { message: 'Hey There' };

  res.status(HTTPStatus.OK).json(download);
};

export const getDownloadLink = async (req, res) => {
  try {
    await testDownloadApi(req.body.url, (data) => {
      // console.log(data);
      // console.log('==');
      const ret = { link: data };
      return res.status(HTTPStatus.OK).json(ret);
    });
  } catch (e) {
    console.log(e);
  }
};

export const getDownloadLinks = async (req, res) => {
  try {
    // req.setTimeOut(0);
    await testDownloadApi2(req.body.payload, (data) => {
      // console.log(data);
      const ret = data;
      return res.status(HTTPStatus.OK).json(ret);
    });
  } catch (e) {
    console.log(e);
  }
};
