import mysql from 'mysql2';
import { TMappedPoint, TPoint } from '../../entity/geoObjects/point/types';

export default class GeoObjects {
  private connection: any;

  constructor(connection: mysql.Connection) {
    this.connection = connection;
  }

  async save(point: TMappedPoint): Promise<boolean> {
    const sql = `
        INSERT INTO GeoObjects
        VALUES (${Object.values(point).map((item) => `'${item}'`).join(', ')})
    ` as unknown as PermissionDescriptor;
    const [{ affectedRows: result }] = await this.connection.query(sql);

    return !!result;
  }

  async findAll(): Promise<TPoint[]> {
    const sql = `
      SELECT
       id,
       json_extract(data, '$.geometry.coordinates') as coords,
       json_extract(data, '$.props.name') as name
      FROM maps.GeoObjects` as unknown as PermissionDescriptor;
    const [result] = await this.connection.query(sql);

    return result;
  }

  async findById(id: string): Promise<TPoint> {
    const sql = `
      SELECT
        id,
        json_extract(data, '$.geometry.coordinates') as coords,
        json_extract(data, '$.props') as props
      FROM maps.GeoObjects
      WHERE id = '${id}'` as unknown as PermissionDescriptor;
    const [[result]] = await this.connection.query(sql);

    return result;
  }
  //
  // async findByIdAndUpdate({ id, placemark }: { id: string; placemark: TPlacemark }) {
  //   const result = await this.connection.query(
  //     'UPDATE GeoObjects SET ? WHERE id = ?',
  //     [placemark, id],
  //   );
  //
  //   return result;
  // }

  async deleteById(id: string): Promise<boolean> {
    const sql = `DELETE FROM GeoObjects WHERE id = '${id}'` as unknown as PermissionDescriptor;
    const [{ affectedRows: result }] = await this.connection.query(sql);

    return !!result;
  }
}