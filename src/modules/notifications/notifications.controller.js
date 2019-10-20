import { Client } from 'postmark';
// import axios from 'axios';

export const sendResetEmail = async (email, name, url) => {
  // Send an email:
  const client = new Client('e3afbb5f-aef8-4f11-8e34-07e50461d7c0');
  try {
    client.sendEmailWithTemplate({
      From: 'charles@pianoafrikonline.com',
      To: email,
      TemplateAlias: 'password-reset-1',
      TemplateModel: {
        name,
        action_url: url,
      },
    });
  } catch (e) {
    console.log(e);
  }
};


export const downloadBookEmail = async (email) => {
  try {
    // Send an email:
    const client = new Client('e3afbb5f-aef8-4f11-8e34-07e50461d7c0');

    client.sendEmailWithTemplate({
      From: 'charles@pianoafrikonline.com',
      To: email,
      TemplateAlias: 'welcome-2',
      TemplateModel: {
      },
    });
  } catch (e) {
    console.log(e);
  }
};


export const sendUserInviteEmail = async (email, companyName, url) => {
  // Send an email:
  const client = new Client('e3afbb5f-aef8-4f11-8e34-07e50461d7c0');
  try {
    client.sendEmailWithTemplate({
      From: 'charles@pianoafrikonline.com',
      To: email,
      TemplateAliass: 'blank-20190510153627',
      TemplateModel: {
        comp_name: companyName,
        set_up_url: url,
      },
    });
  } catch (e) {
    console.log(e);
  }
};

export const testCronEmail = async () => {
  // Send an email:
  const client = new Client('e3afbb5f-aef8-4f11-8e34-07e50461d7c0');
  try {
    client.sendEmailWithTemplate({
      From: 'charles@pianoafrikonline.com',
      To: 'micnkru@gmail.com',
      TemplateAlias: 'blank-20190510153627',
      TemplateModel: {
        comp_name: 'Cron Job OO Tom Tom',
        set_up_url: 'https://google.com',
      },
    });
  } catch (e) {
    console.log(e);
  }
};
