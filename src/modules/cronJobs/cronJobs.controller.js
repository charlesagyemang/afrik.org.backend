import moment from 'moment';
import { CronJob } from 'cron';
// import fs from 'fs';
import youtubedl from 'youtube-dl';
import axios from 'axios';
import { testCronEmail } from '../notifications/notifications.controller';

export const weekInterval = async () => {
  const today = moment();
  const fromDate = today.startOf('week');
  const toDate = today.endOf('week');
  console.log({
    fromDate: fromDate.toDate(),
    today: moment().toDate(),
    toDate: toDate.toDate(),
  });
};


export const testDownloadApi = async (url, callback) => {
  try {
    const video = await youtubedl(url, ['--get-url', '--format=18'], { cwd: __dirname });
    await video.on('info', (info) => {
      callback(info.url);
    });
  } catch (e) {
    console.log(e);
  }
};


export const doJob = async () => {
  await new CronJob('30 6 */1 * *', () => {
    testCronEmail();
    console.log('#Raw-Cron# You will see this message every minute');
  }, null, true, 'Africa/Accra');
};

export const tryJobber = async () => {
  // await new CronJob('0 0 */1 * *', function() {
  await axios.get('https://poole23.herokuapp.com/api/ping/')
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
  // }, null, true, 'Africa/Accra');
};
