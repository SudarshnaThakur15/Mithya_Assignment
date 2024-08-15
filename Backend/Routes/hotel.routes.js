import { Router } from 'express';
import Hotel from '../DB/Models/hotel.model.js';

const router = Router();

router.get('/allhotels', async (req, res) => {
  try {
    const hotels = await Hotel.find();
    res.status(200).json(hotels);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
