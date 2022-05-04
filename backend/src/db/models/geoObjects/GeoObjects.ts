import { Pool } from 'mysql2/promise';
import queries from './queries';
import {
  deleteProps, deleteResult, findAllResult,
  getByIdProps, getByIdResult, saveProps,
  saveResult, updateProps, updateResult,
} from './types';

export default class GeoObjects {
  private pool: Pool;

  constructor(pool: Pool) {
    this.pool = pool;
  }

  async save({ point }: saveProps): saveResult {
    const sql = queries.save({ point });
    const [{ affectedRows: result }]: any = await this.pool.query(sql);

    return !!result;
  }

  async findAll(): findAllResult {
    const sql = queries.findAll();
    const [result]: any = await this.pool.query(sql);

    return result;
  }

  async findById({ id } : getByIdProps): getByIdResult {
    const sql = queries.findById({ id });
    const [[result]]: any = await this.pool.query(sql);

    return result;
  }

  async findByIdAndUpdate({ id, feedback } : updateProps): updateResult {
    const sql = queries.findByIdAndUpdate({ id, feedback });
    const [{ affectedRows: result }]: any = await this.pool.query(sql);

    return !!result;
  }

  async deleteById({ id } : deleteProps): deleteResult {
    const sql = queries.deleteById({ id });
    const [{ affectedRows: result }]: any = await this.pool.query(sql);

    return !!result;
  }
}
