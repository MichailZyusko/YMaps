import mysql from 'mysql2';
import { TPlacemark } from '../../entity/placemark/types';

export default class Placemark {
  private connection: any;

  constructor(connection: mysql.Connection) {
    this.connection = connection;
  }

  async save(placemark: TPlacemark) {
    const sql = `
      INSERT INTO placemarks (id, ${Object.keys(placemark).join(', ')})
      VALUES (DEFAULT, ${Object.values(placemark).map((item) => `'${item}'`).join(', ')})
    `;
    const [{ affectedRows: result }] = await this.connection.query(sql);

    return !!result;
  }

  async findAll() {
    const sql = 'SELECT id, name, lat, lon, type FROM placemarks';
    const [result] = await this.connection.query(sql);

    return result;
  }

  async findById(id: string) {
    const sql = `SELECT * FROM placemarks WHERE id = '${id}'`;
    const [[result]] = await this.connection.query(sql);

    return result;
  }

  async findByIdAndUpdate({ id, placemark }: { id: string; placemark: TPlacemark }) {
    const result = await this.connection.query(
      'UPDATE placemarks SET ? WHERE id = ?',
      [placemark, id],
    );

    return result;
  }

  async deleteById(id: string) {
    const sql = `DELETE FROM placemarks WHERE id = '${id}'`;
    const [{ affectedRows: result }] = await this.connection.query(sql);

    return !!result;
  }
}
