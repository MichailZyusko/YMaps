import mysql from 'mysql2';
import config from '../../config';
import GeoObjects from './models/GeoObjects';

const {
  db: {
    host, user, password, database, port,
  },
} = config;

const initSQLQuery = `
  CREATE DATABASE IF NOT EXISTS ${database};
  
  use ${database};
  
  CREATE TABLE IF NOT EXISTS GeoObjects (
    id varchar(36) PRIMARY KEY,
    data JSON
  );
`;

type DBInstance = DB | null;

class DB {
  private static instance: DBInstance = null;

  private static connection: mysql.Connection;

  public GeoObjects: GeoObjects;

  constructor() {
    if (DB.instance) {
      throw new Error('Error: Instantiation failed: Use DB.getInstance() instead of new.');
    }

    DB.instance = this;
    // @ts-ignore
    DB.connection = mysql.createConnection({
      port,
      host,
      user,
      password,
      database,
    }).promise();
    this.GeoObjects = new GeoObjects(DB.connection);

    // DB.connection.query(initSQLQuery)
    //   // @ts-ignore
    //   .then(() => {
    //     console.log('DB initialized');
    //   }).catch((err: any) => {
    //     console.log(err);
    //   });
  }
}

export default new DB();
