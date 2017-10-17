import sgMail from '@sendgrid/mail';

function sendEmail(emailParams) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const message = {
    to: emailParams.recepientAddress,
    from: emailParams.senderAddress,
    subject: emailParams.subject,
    text: 'HI',
    html: emailParams.message,
  };
  sgMail.send(message).then((res) => {
    console.log(res, 'res');
  }).catch((error) => {
    console.log(error, '------');
  });
}

export default sendEmail;
