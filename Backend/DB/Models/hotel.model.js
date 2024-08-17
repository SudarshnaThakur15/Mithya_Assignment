import { Schema, model } from "mongoose";
import mongoose from 'mongoose';
//Prompt:I want to create a schema for the rooms in the hotel. every hootel is going to have multiple rooms.Each room will have basic attributes like 1:type-delux,non-delux,semidelux, 2:price,3:pictures ,4:availability,5:Amenties  how can I add it to my hotel schema
const RoomSchema = new Schema({
_id: { 
        type: mongoose.Schema.Types.ObjectId, 
        auto: true // Auto-generate the _id field for each room
      },
  type: String, 
  price: Number,
  pictures:{
    type:[String],
  },
  isAvailable: { 
    type: Boolean, default: true 
  },
  
  amenities: [String], 
  description: String 
});

const hotelSchema=new Schema({
    name:{
        type:String,
        required:true,
        maxlength:255
    },
    location:{
        type:String,
        required:true,
        maxlength:255
    },
    rating: {
        type: Number,
        min: 0,
        max: 5
    },
    amenities: {
        type: String,
    },
    price_range: {
        type: String,
        maxlength: 50
    },
    images:{
        type:[String],
    },
    contact: {
        type:[Number],
    },
    rooms: [RoomSchema], // Embedding Room schema
    description: String 
})
const Hotel = model('Hotel', hotelSchema);
const Room = model('Room', RoomSchema);
export default Hotel;
