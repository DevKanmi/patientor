import express from 'express';
import cors from 'cors';
const app = express();
app.use(express.json());


app.use(cors());

import { patients } from './Services/patientsRoute';
import { diagnoses } from './Services/diagonesesService';

app.get('/ping', (_req, res) => {
  console.log('someone pinged here');
  res.send('pong');
  
});

app.use('/api', patients);
app.use('/api',diagnoses);

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});