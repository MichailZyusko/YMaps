import { Request, Response, NextFunction } from 'express';
import { createTransport } from 'nodemailer';
import ApiError from './ApiError';

import config from '../../config';

const { email: { from, to, pass } } = config;

const transporter = createTransport({
  service: 'Mail.ru',
  auth: {
    user: from,
    pass,
  },
});

const sendMail = (error: Error) => {
  const mailOptions = {
    from,
    to,
    subject: 'Error in API',
    text: `
    Error: ${error.message}
    Stack: ${error.stack}
  `,
  };

  return new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.log(error);
        reject(err);
      } else {
        console.log(`Email sent: ${info.response}`);
        resolve(info);
      }
    });
  });
};

// eslint-disable-next-line no-unused-vars
export default async (err: Error, req: Request, res: Response, next: NextFunction) => {
  const message = err instanceof ApiError ? err.message : 'Internal server error';
  const status = err instanceof ApiError ? err.status : 500;

  await sendMail(err);

  res.status(status).send({
    code: status,
    message,
  });
};
