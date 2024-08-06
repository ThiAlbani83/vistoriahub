import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';
import bodyParser from "body-parser";
dotenv.config();

mongoose.connect(process.env.MONGODB).then(() => {
  console.log("Connected to MongoDB");
}).catch((error) => {
  console.log(error.reason);
});

const app = express();
app.listen(3000, () => {
  console.log("Server running on port 3000");
});

app.use(bodyParser.json());

app.use('/backend/user', userRouter);
app.use('/backend/auth', authRouter);
