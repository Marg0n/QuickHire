/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Application, NextFunction, Request, Response } from 'express';
import express from 'express';
import cors from 'cors';
import router from './app/routes/index.js';
import config from './app/config/index.js';

const app: Application = express();

//* Parsers
app.use(
  cors({
    origin: config.frontendBaseUrl,
    credentials: true,
  }),
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req: Request, res: Response) => {
  try {
    res.status(200).send({
      success: true,
      message: 'Server is running! ⚡',
    });
  } catch (err: any) {
    res.status(500).send({
      message: err.message || 'Something went wrong!',
      success: false,
      error: err.errors,
      stack: err.stack,
    });
  }
});

//* Routes
app.use('/api/v1', router);

// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  res.status(500).send({
    success: false,
    message: err.message || 'Something went wrong',
    stack: err.stack,
  });
});

export default app;
