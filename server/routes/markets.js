import express from 'express';
import { indexPage, marketsPage } from '../controllers';

const marketRouter = express.Router();
marketsRouter.get('/', indexPage);
marketsRouter.get('/markets', marketsPage);

export default marketsRouter;
