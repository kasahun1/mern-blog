import express from 'express';
import mongoose from 'mongoose';
const app = express();
import dotenv from "dotenv";

dotenv.config();

mongoose.connect(process.env.MONGO) .then(() => {
    console.log('MongoDb is connected');
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(3000, () => {
    console.log('Server is running on port 3000!');
  });