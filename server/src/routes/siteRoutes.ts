import express, { Router } from 'express';

import siteController from '../controllers/siteController';

class  SiteRoutes {

  router: Router = express.Router();

  constructor() {
    this.config();
  }

  config() {
    this.router.get('/', siteController.list);
  }
}
export default new SiteRoutes().router;
