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

function bytesToSize(bytes) {
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  if (bytes === 0) return '0 Byte';
  const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)), 10);
  return `${Math.round(bytes / (1024 ** i), 2)} ${sizes[i]}`;
}


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


export const linksTest = async (url, callback) => {
  try {
    const formats = [];
    await youtubedl.getInfo(url, ['--youtube-skip-dash-manifest'], (err, info) => {
      info.formats.forEach((item) => {
        if (item.format_note !== 'DASH audio' && item.filesize) {
          item.filesize = item.filesize ? bytesToSize(item.filesize) : 'unknown';
          // console.log(item);
          formats.push(item);
        }
      });
      callback(formats);
    });
  } catch (e) {
    console.log(e);
  }
};


export const testDownloadApi2 = async (object, callback) => {
  try {
    // await new CronJob('* * * * *', () => {
    const downoadLinks = [];
    let count = 0;
    await object.forEach((obj) => {
      const video = youtubedl(obj.youtubeLink, ['--get-url', '--format=18'], { cwd: __dirname });
      video.on('info', (info) => {
        count += 1;
        const newObj = { ...obj, downloadLink: info.url };
        downoadLinks.push(newObj);
        if (count === object.length) {
          callback(downoadLinks);
        }
      });
    });
    // }, null, true, 'Africa/Accra');
  } catch (e) {
    console.log(e);
  }
};


export const doJob = async () => {
  await new CronJob('*/10 * * * *', () => {
    testCronEmail();
    console.log('#Raw-Cron# You will see this message every minute');
  }, null, true, 'Africa/Accra');
};

export const tryJobber = async () => {
  await new CronJob('*/3 * * * *', () => {
    axios.get('https://poole23.herokuapp.com/api/ping/')
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
  }, null, true, 'Africa/Accra');
};

export const tryJobber2 = async () => {
//
//   const channel = {
//     name: 'channelName',
//   email: 'mmm@ssgmailw.com',
//   password: 'password',
//   channelName: 'channelName',
//   channelLink: 'channelLink',
//   payload: {},
//   name: "muzamma",
// }
//
// axios.post('http://localhost:4009/api/ping/shatta.bundles/', channel)
// .then((responser) => {
//   console.log(responser.data);
// })
// .catch((errorr) => {
//   console.log(errorr);
// });

  let move = "s4cgqQYa4eJu7c6Cx"
  const payload = [
    {
      // "id": 'ajhvcshdagfscgfasdeqweqwe',
      "channelId": move,
      "payload": {},
      "title": 'Course One',
      "desc": 'Course One Description',
      "trailerLink": 'https://www.google.com',
    },
    {
      // "id": 'ajhvcshdagfscgfasd123123',
      "channelId": move,
      "payload": {},
      "title": 'Course One',
      "desc": 'Course One Description',
      "trailerLink": 'https://www.google.com',
    },{
      // "id": 'ajhvcshdagfscgsdadasdfsdffasd',
      "channelId": move,
      "payload": {},
      "title": 'Course One',
      "desc": 'Course One Description',
      "trailerLink": 'https://www.google.com',
    },{
      // "id": 'ajhvcshdagfssdacgfasd123123',
      "channelId": move,
      "payload": {},
      "title": 'Course One',
      "desc": 'Course One Description',
      "trailerLink": 'https://www.google.com',
    },
  ]
  // await new CronJob('*/3 * * * *', () => {
  // axios.post(`http://localhost:4009/api/courses/bulk.create/${move}`,  { payload: payload }  )
  // .then((responser) => {
  //   console.log(responser.data);
  // })
  // .catch((errorr) => {
  //   console.log(errorr);
  // });

  // }, null, true, 'Africa/Accra');
};
