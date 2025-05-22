import exrpess, { json } from 'express';
import { userRouter } from './routes/user';
import { authRouter } from './routes/auth';
import cookieParser from 'cookie-parser';
import cors from 'cors';

const app = exrpess();
app.use(json());
app.use(cors());
app.use(cookieParser());

app.use('/user', userRouter);
app.use('/auth', authRouter);
const PORT = 8000;

app.get('/', (req, res) => {
  res.send('hello world');
});

app.listen(PORT, () => {
  console.log(`server runnign at http://localhost:${PORT}`);
});
