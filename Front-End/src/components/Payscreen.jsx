import React from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import { useState } from 'react';

function PayScreen({ room, hotel, startDate, endDate }) {
    const { id, type, name, pictures, description, price } = room;
    const { location, hotelName } = hotel;

    const totalDays = dayjs(endDate).diff(dayjs(startDate), 'day');
    const totalPrice = totalDays * price;

    const handlePay = () => {
        // Implement payment functionality here
        alert(`Payment of $${totalPrice} successful!`);
    };

    return (
        <div className="max-w-2xl mx-auto bg-white p-6 shadow-lg rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Payment Summary</h2>
            <div className="flex">
                <img
                    className="w-48 h-32 object-cover rounded-lg"
                    src={pictures[0]}
                    alt={name}
                />
                <div className="ml-6">
                    <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
                    <p className="text-gray-600">{type}</p>
                    <p className="text-gray-600">{hotelName}</p>
                    <p className="text-gray-600">{location}</p>
                    <p className="text-gray-600 mt-2">{description}</p>
                </div>
            </div>
            <div className="mt-4">
                <p className="text-lg font-bold text-gray-900">Price: ${price}.00 per night</p>
                <p className="text-lg text-gray-800">Number of nights: {totalDays}</p>
                <p className="text-lg font-bold text-red-500">Total Price: ${totalPrice}.00</p>
            </div>
            <button
                className="bg-navy text-white font-bold py-2 px-4 rounded-full mt-6 hover:bg-navy-700"
                onClick={handlePay}
            >
                Pay Now
            </button>
        </div>
    );
}

PayScreen.propTypes = {
    room: PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        pictures: PropTypes.arrayOf(PropTypes.string).isRequired,
        description: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
    }).isRequired,
    hotel: PropTypes.shape({
        location: PropTypes.string.isRequired,
        hotelName: PropTypes.string.isRequired,
    }).isRequired,
    startDate: PropTypes.string.isRequired,
    endDate: PropTypes.string.isRequired,
};

export default PayScreen;
