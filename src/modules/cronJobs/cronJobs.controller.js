import moment from 'moment';
import { CronJob } from 'cron';
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


export const doJob = async () => {
  await new CronJob('30 6 */1 * *', () => {
    testCronEmail();
    console.log('#Raw-Cron# You will see this message every minute');
  }, null, true, 'Africa/Accra');
};
