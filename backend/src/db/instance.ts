import mysql from 'mysql2';
import { Pool } from 'mysql2/promise';
import config from '../../config';
import GeoObjects from './models/geoObjects/GeoObjects';

const { db: configuration } = config;

const createDB = `
  CREATE DATABASE IF NOT EXISTS ${configuration.database};
`;

const createTable = `
  CREATE TABLE IF NOT EXISTS GeoObjects(
    id varchar(36) PRIMARY KEY,
    data JSON
  );
`;

class DB {
  // eslint-disable-next-line no-use-before-define
  protected static instance: DB;

  protected static pool: Pool;

  public GeoObjects: GeoObjects;

  constructor() {
    if (DB.instance) {
      throw new Error('[error]: Can\'t create more than one instance of DB');
    }

    DB.pool = (mysql.createPool(configuration)).promise();
    DB.pool.query(createDB).then(() => {
      DB.pool.query(createTable).then(() => {
        DB.instance = this;
        console.log('DB initialized');
      }).catch((err: any) => {
        console.log(err);
      });
    });

    this.GeoObjects = new GeoObjects(DB.pool);
  }
}

export default new DB();
