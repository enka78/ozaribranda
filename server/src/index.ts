import express, { Application } from 'express';
import morgan = require ('morgan');
import cors = require ('cors');


 import siteRoutes from './routes/siteRoutes';
// import gameRoutes from './routes/gamesRoutes';

class Server {

  public app: Application;
  constructor() {
    this.app = express();
    this.config();
    this.routers();
  }

  config(): void {

    this.app.set('port', process.env.PORT || 3000);
    this.app.use(morgan('dev'));
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.urlencoded({extended: false}));
  }

  routers(): void {

    this.app.use('/', siteRoutes);
    // this.app.use('/api/games',gameRoutes);
  }

  start(): void {
    this.app.listen(this.app.get('port'), () => {
      console.log('server on port', this.app.get('port'));
    });
  }

}

const server = new Server();
server.start();
