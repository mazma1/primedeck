import nodemailer from 'nodemailer';

function sendEmail(req, user) {
  const emailParams = {
    recepientAddress: user.email,
    senderAddress: req.decoded.data.email,
    subject: 'Welcome to Prime Deck!',
    message: `Hello ${user.firstName} ${user.lastName},
              <br><br>An account has been created for you on Prime Deck.
              Kindly follow the link below to complete your registration.
              <br><br><a href='http://${req.headers.host}'>Prime Deck ></a>
              <br><br>Login Details:
              <br>
              Username: ${user.username}<br>
              Email: ${user.email}<br>
              Password: ${user.username}<br><br>
              Note that your username is your default password and you are 
              expected to change it on login.
              <br><br><br><br>
              Cheers,<br>
              The Prime Deck Team`
  };
  const mailOptions = {
    from: emailParams.recepientAddress,
    to: emailParams.senderAddress,
    subject: emailParams.subject,
    html: emailParams.message
  };

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    port: 465,
    secure: true,
    auth: {
      user: 'mazi.mary.o@gmail.com',
      pass: process.env.EMAIL_PASSWORD
    }
  });

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log(`Email sent:${info.response}`);
    }
  });
}

export default sendEmail;
