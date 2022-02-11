import mongoose from "mongoose";
import { DB_URL } from '../config/database.config.js';

const PORT = process.env.PORT || 5000

export const makeConnection = (app) => {
  try {
    mongoose
      .connect(DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }, () => {
        console.log('mongoDB database connected');
      })
    app.listen(PORT, () => {
      console.log(`server is running on port http://localhost:${PORT}`);
    });
  } catch (error) {
    console.log("Error in connecting db", err);
  }
}