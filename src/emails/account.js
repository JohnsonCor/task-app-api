const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'corgyj@gmail.com',
    subject: 'Thanks for joining!',
    text: `Welcome to the app, ${name}.  Let us know how you get along with the app.`,
  });
};

const sendCancelationEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'corgyj@gmail.com',
    subject: 'Sorry to see you leave.',
    text: `Goodbye, ${name}.  We hope to see you back sometime soon.`,
  });
};

module.exports = {
  sendWelcomeEmail,
  sendCancelationEmail,
};
