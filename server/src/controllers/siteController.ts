import {Request, Response} from 'express';
import pool from '../database';
class SiteController {
  public async list (req: Request, res: Response) {
    const games = await pool.query('SELECT * FROM slider');
    res.json(games);
  }
}
 export const siteController = new SiteController;
export default siteController;
