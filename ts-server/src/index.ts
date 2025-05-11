import express, { Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();
const app = express();

const PORT = process.env.PORT || 3000;
const EXTERNAR_API_URL = process.env.EXTERNAR_API_URL;

app.get('/colectivos/', (req: Request, res: Response) => {

  res.status(200).send('Hello World!');
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});

