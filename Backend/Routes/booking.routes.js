import express from 'express';
const router = express.Router();
import Booking from '../DB/Models/roomBooking.model.js';  // Ensure this path is correct
router.post('/bookingdraft', async (req, res) => {
    try {
        const { userId, hotelId, roomId, startDate, endDate,status } = req.body;
        const booking = await Booking.create({ userId, hotelId, roomId, startDate, endDate,status });
        res.status(201).json({ message: 'Booking successful', booking });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: 'Server error' });
    }
});
router.put('/booking', async (req, res) => {
    try {
        const { userId, hotelId, roomId, startDate, endDate, status } = req.body;
        const booking = await Booking.findOneAndUpdate ({ userId, hotelId, roomId, startDate, endDate, status }, 
               { status: 'completed' });
        res.status(200).json({ message: 'Booking completed', booking });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: 'Server error' });
    }
});