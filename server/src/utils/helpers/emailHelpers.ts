import nodemailer from 'nodemailer';
import type SMTPTransport from 'nodemailer/lib/smtp-transport';

/**
 * Function send mail to specific email address
 * @param {string} from
 * @param {string} to
 * @param {string} subject
 * @param {string} text
 */
export const sendMail = async (
  from: string,
  to: string,
  subject: string,
  text: string,
  html: string,
): Promise<SMTPTransport.SentMessageInfo> => {
  const transporterOptions: SMTPTransport.Options = {
    host: process.env.EMAIL_HOST as string,
    port: Number(process.env.EMAIL_PORT ?? 0),
    secure: Boolean(process.env.EMAIL_SECURE ?? true),
    auth: {
      user: process.env.EMAIL_USER as string,
      pass: process.env.EMAIL_PASSWORD as string,
    },
  };

  const transporter = nodemailer.createTransport(transporterOptions);

  const mailOptions = {
    from,
    to,
    subject,
    text,
    html,
  };

  return new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        reject(err);
      } else {
        resolve(info);
      }
    });
  });
};
