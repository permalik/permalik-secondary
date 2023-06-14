import express, { json } from 'express';
import backblazeRouter from './routes/backblaze.route';
const app = express();
const port = 3000;

// app.use(json());

app.use('/posts', backblazeRouter);

// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
