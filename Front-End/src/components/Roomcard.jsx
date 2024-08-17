import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import PayScreen from './Payscreen';

function Roomcard({ hotel_id, id, type, name, pictures, description, isAvailable, price,hotel }) {
    const apiUrl = import.meta.env.VITE_API_URL;

    const [userId, setUserId] = useState(null);
    const [isHovered, setIsHovered] = useState(false);
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [status, setStatus] = useState('draft');
    const [showPayScreen, setShowPayScreen] = useState(false);

    const handleBooking = async () => {
        const storedUserId = localStorage.getItem('userId');
        if (!storedUserId) {
            alert('User not logged in');
            return;
        }

        setUserId(storedUserId);

        try {
            const response = await axios.put(`${apiUrl}/api/users/bookingdraft`, { userId, hotel_id, id, startDate, endDate, status });
            console.log(response);
            setShowPayScreen(true);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    if (showPayScreen) {
        

        return <PayScreen room={{ id, type, name, pictures, description, price }} hotel={hotel} startDate={startDate} endDate={endDate} />;
    }

    return (
        <div
            className={`bg-red-300 rounded-lg overflow-hidden shadow-lg border border-gray-300 transition-transform duration-300 ${isHovered ? 'transform scale-105' : 'transform scale-100'}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
                width: '350px', // Increased width for bigger card
                margin: '20px',  // Added margin for spacing between cards
                padding: '20px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
            }}
        >
            <div className="relative">
                <img
                    className="w-full h-48 object-cover rounded-lg" // Increased height and added rounded corners
                    src={pictures[0]}
                    alt={name}
                />
            </div>
            <div className="px-4 py-4">
                <h3 className="text-lg font-bold text-gray-900">{name}</h3>
                <div className="text-lg font-semibold mb-1 text-gray-800">
                    {type}
                </div>
                <p className="text-gray-800 text-base">
                    {description}
                </p>
                <div className="text-red-500 font-semibold mt-2">${price}.00</div>
                
                {/* Date Pickers */}
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                        label="Start Date"
                        value={startDate}
                        onChange={(newValue) => setStartDate(newValue)}
                    />
                    <DatePicker
                        label="End Date"
                        value={endDate}
                        onChange={(newValue) => setEndDate(newValue)}
                        minDate={startDate ? startDate : dayjs()} // Disable dates before start date
                    />
                </LocalizationProvider>
            </div>
            <button
                className="bg-navy text-white font-bold py-2 px-4 rounded-full mt-4 hover:bg-navy-700"
                onClick={handleBooking}
                style={{ backgroundColor: (isAvailable && startDate && endDate) ? 'navy' : 'gray' }}
                disabled={!startDate || !endDate || !isAvailable}
            >
                Book Now
            </button>
        </div>
    );
}

Roomcard.propTypes = {
    id: PropTypes.string.isRequired,
    hotel_id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    pictures: PropTypes.arrayOf(PropTypes.string).isRequired,
    description: PropTypes.string.isRequired,
    isAvailable: PropTypes.bool.isRequired,
    price: PropTypes.number.isRequired,
};

export default Roomcard;
