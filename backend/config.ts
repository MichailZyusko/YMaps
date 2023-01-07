import dotenv from 'dotenv';

dotenv.config();

type Environment = {
  app: {
    port: number;
    host: string;
  };
  db: {
    host: string;
    port: number;
    user: string;
    password: string;
    database: string;
  };
};
type Config = Record<string, Environment>;

const dev: Environment = {
  app: {
    port: Number.parseInt(process?.env?.APP_PORT?.toString() ?? '3000', 10),
    host: process.env.APP_HOST ?? 'localhost',
  },
  db: {
    host: process.env.DB_HOST ?? 'localhost',
    port: Number.parseInt(process?.env?.DB_PORT?.toString() ?? '3306', 10),
    user: process.env.DB_USER ?? '',
    password: process.env.DB_PASSWORD ?? '',
    database: process.env.DB_NAME ?? '',
  },
};

const config: Config = {
  dev,
};

export default config[process?.env?.NODE_ENV ?? 'dev'];
