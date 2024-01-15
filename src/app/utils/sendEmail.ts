import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

export const SendEmail = async (
  name: string,
  email: string,
  message: string
) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      // TODO: replace `user` and `pass` values from <https://forwardemail.net>
      user: process.env.EMAIL_ADDRESS,
      pass: process.env.EMAIL_PASS,
    },
  });

  await transporter.sendMail({
    from: email, // sender address
    to: process.env.EMAIL_ADDRESS, // list of receivers
    subject: `Contact With ${name}`, // Subject line
    text: ``, // plain text body
    html: `<br>${message}</br>
    <br>Contact me in this email: ${email}</br>`, // html body
  });
};
