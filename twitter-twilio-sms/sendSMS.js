// this file should go under utils
const twilio = require('twilio');

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN; 
const client = new twilio(accountSid, authToken);

const sendSms = body => {
  // you want to return this promise chain so you can .then off of it
  return client.messages
    .create({
      body: body,
      to: process.env.RECIPIENT, 
      from: process.env.TWILIO_NUMBER 
    });
    // .then/.catch off of the use of this function
    // sendSms('hi)
    //   .then(...)
    //   .catch(...)
};

module.exports = sendSms;
