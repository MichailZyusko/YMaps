import express, { Express } from 'express';
import serverless from 'serverless-http';
import pointRouter from './src/entity/geoObjects/point/routes/index';
import errorHandler from './src/errors/errorHandler';
import config from './config';
import cors from './src/middleware/cors';

const { app: { port, host } } = config;

const app: Express = express();

app.use(cors);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api/v1/points', pointRouter);
app.use(errorHandler);

app.listen(port, host, () => {
  console.log(`[server]: Server is running at http://${host}:${port}`);
});

export const handler = serverless(app);
