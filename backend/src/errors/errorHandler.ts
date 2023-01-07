import { Request, Response, NextFunction } from 'express';
import ApiError from './ApiError';

// eslint-disable-next-line no-unused-vars
export default async (err: Error, req: Request, res: Response, next: NextFunction) => {
  const message = err instanceof ApiError ? err.message : 'Internal server error';
  const status = err instanceof ApiError ? err.status : 500;

  res.status(status).send({
    code: status,
    message,
  });
};
