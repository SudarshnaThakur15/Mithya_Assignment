import express, { json } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './DB/connection.js';
import Hotel from './DB/Models/hotel.model.js';

const app = express();
dotenv.config();
app.use(cors());
app.use(json());

const port =process.env.PORT || 5000;





connectDB();
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});