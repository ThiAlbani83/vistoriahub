import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from './routes/user.route.js';
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

app.use('/backend/user', userRouter);
