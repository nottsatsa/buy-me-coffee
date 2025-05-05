import exrpess from 'express';
import { configDotenv } from 'dotenv';

configDotenv();
const app = exrpess();
const PORT = process.env;

app.listen(PORT, () => {
  console.log(`server runnign at http://localhost:${PORT}`);
});
