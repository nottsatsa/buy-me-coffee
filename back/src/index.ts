import exrpess, { json } from 'express';
import { userRouter } from './routes/user';

const app = exrpess();
app.use(json());
app.use('/user', userRouter);
const PORT = 8000;

app.get('/', (req, res) => {
  res.send('hello world');
});

app.listen(PORT, () => {
  console.log(`server runnign at http://localhost:${PORT}`);
});
