import moment from 'moment';
import { CronJob } from 'cron';
// import fs from 'fs';
import youtubedl from 'youtube-dl';
// import axios from 'axios';
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
  const video = await youtubedl(url, ['--format=18'], { cwd: __dirname });
  await video.on('info', (info) => {
    callback(info.url);
  });
};


export const doJob = async () => {
  await new CronJob('30 6 */1 * *', () => {
    testCronEmail();
    console.log('#Raw-Cron# You will see this message every minute');
  }, null, true, 'Africa/Accra');
};
