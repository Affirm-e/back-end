require('dotenv').config();
const twilio = require('twilio');

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN; 
const client = new twilio(accountSid, authToken);

const sendSms = body => {
  client.messages
    .create({
      body: body,
      to: process.env.RECIPIENT, 
      from: process.env.TWILIO_NUMBER 
    })
    .then(message => console.log(message.sid)
      .catch(message => console.log(message)));
};

module.exports = sendSms;
