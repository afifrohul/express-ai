import express from 'express';
import cors from 'cors';
import router from './routes.js';
import path from 'path';

const app = express();
const port = 3000;
const host = 'localhost';

app.use(express.json());
app.use(cors({
  origin: '*'
}));

app.get('/', (req, res) => {
  return res.json({
    status: 'success',
    message: 'Backend API server successfully running. Ready to accept requests!',
  });
});

app.use('/', router);

app.use(
  '/image',
  express.static(path.resolve('src/uploads/images'))
);

app.listen(port, () => {
  console.log(`Server running at http://${host}:${port}`);
});
