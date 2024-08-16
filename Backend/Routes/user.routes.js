import express, { Router } from 'express';
const router = express.Router();
import User from '../DB/Models/user.model.js';
import bcrypt from 'bcrypt';

router.post('/signup', async (req, res) => {
    try {
        const { username, email, password } = req.body;

        // Check if the user already exists
        const user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await User.create({ username, email, password: hashedPassword });
        res.status(201).json({ message: 'User created successfully', user: newUser });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: 'Server error', error });
    }
});
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({   email });
        if (!user) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: 'Server error', error });
    }});
router.get('/profile', async (req, res) => {
    try {
        const user = await User.findById(req.user.id);
        res.status(200).json(user);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: 'Server error', error });
    }
});
router.put('/activities', async (req, res) => {
    try {
        const user = await User.findById(req.user.id);  
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        const { type, hotelid } = req.body;
        user.activities.push({ type, hotelid });
        await user.save();
        res.status(200).json(user);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: 'Server error', error });
    }
}   );
router.get('/activities', async (req, res) => {
    try {
        const user = await User.findById(req.user.id);
        res.status(200).json(user.activities);
    } catch (error) {   
        console.error('Error:', error);
        res.status(500).json({ message: 'Server error', error });
    }   });

export default router;
