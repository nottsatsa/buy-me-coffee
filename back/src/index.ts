import exrpess from 'express';
// import { configDotenv } from 'dotenv';

// configDotenv();
const app = exrpess();
// const PORT = process.env;
const PORT = 8000;

app.get('/', (req, res) => {
  res.send('hello world');
});

app.listen(PORT, () => {
  console.log(`server runnign at http://localhost:${PORT}`);
});
