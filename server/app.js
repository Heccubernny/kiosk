import cookieParser from 'cookie-parser';
import express from 'express';
import logger from 'morgan';
import marketsRouter from './routes/markets';

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use('/v1', marketsRouter);

export default app;
