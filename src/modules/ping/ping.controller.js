// import moment from 'moment';
// import { Op } from 'sequelize';
import HTTPStatus from 'http-status';
import { testDownloadApi } from '../cronJobs/cronJobs.controller';
// import User from '../user/user.model';


export const pingServer = async (req, res) => {
  const download = { message: 'Hey There' };

  res.status(HTTPStatus.OK).json(download);
};

export const getDownloadLink = async (req, res) => {
  try {
    await testDownloadApi(req.body.url, (data) => {
      // console.log(data);
      console.log('==');
      return res.status(HTTPStatus.OK).json({ link: data });
    });
  } catch (e) {
    console.log(e);
  }
};
