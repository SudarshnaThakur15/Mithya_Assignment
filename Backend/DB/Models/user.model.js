import { Schema, model } from 'mongoose';
//prompt: i want to track the activities of the user like when he visited the hotel, when he drafted a booking, when he completed a booking. I want to store this information in the database. How can I design the schema for the user and activity?
const ActivitySchema = new Schema({
  type: { type: String }, // Type of activity, e.g., 'visit', 'draft_booking', 'completed_booking'
  hotelId: { type: Schema.Types.ObjectId, 
    ref: 'Hotel' },
   // it is for the Reference to a Hotel document
  date: { type: Date,
     default: Date.now } // Date when the activity occurred
});

const UserSchema = new Schema({
  username:
   { 
    type: String,
    required: true, 
    unique: true 
  },
  email: 
  { 
    type: String, 
    required: true,
    unique: true 
  },
  password: 
  { 
    type: String, 
    required: true 
  },
  role: 
  { 
    type: String, 
    enum: ['customer', 'admin'], 
    default: 'customer' 
  }, 
  activities: [ActivitySchema], 
  bookings: [
    { 
        type: Schema.Types.ObjectId, 
        ref: 'Booking'
    }] // References to Booking documents
});

const Activity = model('Activity', ActivitySchema);




