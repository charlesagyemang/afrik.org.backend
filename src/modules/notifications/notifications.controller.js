import axios from 'axios';
import { Client } from 'postmark';
import Pusher from 'pusher';

export const channelsClient = new Pusher({
  appId: '887715',
  key: 'c9f30615aa53f92bf6b4',
  secret: 'cb5f92b1bd1d955a5cc2',
  cluster: 'eu',
  encrypted: true,
});


export const sendCouponEmail = async (email, name, link, days) => {
  // Send an email:
  const client = new Client('e3afbb5f-aef8-4f11-8e34-07e50461d7c0');
  try {
    client.sendEmailWithTemplate({
      From: 'admin@pianoafrikonline.com',
      To: email,
      TemplateAlias: 'blank-20190510153627-2',
      TemplateModel: {
        name,
        link,
        days,
      },
    });
  } catch (e) {
    console.log(e);
  }
};


export const sendCouponMessage = async (number, senderId, message) => {
  axios.get(`https://api.smsgh.com/v3/messages/send?From=${senderId}&To=${number}&Content=${message}&ClientId=idtdhbtx&ClientSecret=ybgoupdp`)
  .then((response) => { console.log(response.data); })
  .catch((error) => { console.log(error.response.data); });
};
