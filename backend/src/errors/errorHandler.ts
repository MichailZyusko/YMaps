import { Request, Response, NextFunction } from 'express';
import ApiError from './ApiError';

export default (err: Error, req: Request, res: Response, next: NextFunction) => {
  const message = err instanceof ApiError ? err.message : 'Internal server error';
  const status = err instanceof ApiError ? err.status : 500;

  console.error(err);
  res.status(status).send({
    code: status,
    message,
  });
};
