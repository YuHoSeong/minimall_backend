import { config } from './../config';
import express, { Request, Response, NextFunction } from 'express';

const app = express();

app.get('/welcome', (req: Request, res: Response, next: NextFunction) => {
  res.send('welcome!');
});

app.listen(config.port, () => {
  console.log(`
  ################################################
  🛡️  Server listening on port: ${config.port}🛡️
  ################################################
`);
});
