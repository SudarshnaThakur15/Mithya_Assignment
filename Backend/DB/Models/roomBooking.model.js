import mongoose from 'mongoose';
const BookingSchema = new mongoose.Schema({
    userId: mongoose.Schema.Types.ObjectId,
    hotelId: mongoose.Schema.Types.ObjectId,
    roomId: mongoose.Schema.Types.ObjectId,
    startDate: Date,
    endDate: Date,
    status: { type: String, enum: ['draft', 'completed'], default: 'draft' }
  });
  
  const Booking = mongoose.model('Booking', BookingSchema);
  export default Booking;