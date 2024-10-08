import express, { json } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './DB/connection.js';
import hotelRoutes from './Routes/hotel.routes.js';
import user from './DB/Models/user.model.js';
import userroutes from './Routes/user.routes.js';
import booking from './DB/Models/roomBooking.model.js';
import Hotel from './DB/Models/hotel.model.js';
dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(json());

// Routes
app.use('/api/hotels', hotelRoutes);
app.use('/api/users', userroutes);

// Connect to the database
connectDB().then(() => {
    // Start the server
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
}).catch(error => {
    console.error('Failed to connect to the database:', error);
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Internal Server Error' });
});
