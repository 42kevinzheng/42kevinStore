import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import data from './data.js';
import userRouter from './routes/userRouter.js';
import productRouter from './routes/productRoute.js';

dotenv.config();

const app = express();
app.use(express.json({ limit: '30mb', extended: true }))
app.use(express.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

app.use('/api/users', userRouter);
app.use('/api/products', productRouter);
app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

app.get('/', (req, res) => {
  res.send('Server is ready');
});

const PORT = process.env.PORT|| 5001;

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

mongoose.set('useFindAndModify', false);
