// import moment from 'moment';
// import { Op } from 'sequelize';
import HTTPStatus from 'http-status';
// import User from '../user/user.model';


export const pingServer = async (req, res) => {
  const download = { message: 'Hey There' };

  res.status(HTTPStatus.OK).json(download);
};
