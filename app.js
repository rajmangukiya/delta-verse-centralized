import express from 'express'
import dotenv from "dotenv";
import mongoose from "mongoose";
import { connect } from 'http2';
import { makeConnection } from './src/utils/connection.js';

dotenv.config();

const app = express()

app.use(express.static('files'))  
app.set("trust proxy", true);

app.get("/", (req, res) => {
  res.json({
    message: "🏡 Hello 🏡",
  });
});

makeConnection(app)