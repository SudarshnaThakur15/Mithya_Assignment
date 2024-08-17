import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Roomcard from './Roomcard';

const HotelCard = ({ id, image, name, location, description, rating, pricerange, hotel }) => {
    const [showRooms, setShowRooms] = useState(false);

    const handle = async () => {
        const storedUserId = localStorage.getItem('userId');
        if (!storedUserId) {
            alert('User not logged in');
            return;
        }

        const apiUrl = import.meta.env.VITE_API_URL;
        const type = "Visited";

        try {
            await axios.put(`${apiUrl}/api/users/addactivities`, { userId: storedUserId, type, hotelid: id });
            setShowRooms(true);
        } catch (error) {
            console.error('Error:', error);
        }
    }

    const closePopup = () => {
        setShowRooms(false);
    }

    return (
        <div className="max-w-sm rounded-lg overflow-hidden shadow-lg border border-gray-300">
            <div className="relative">
                <img className="w-full h-80 object-cover" src={image} alt={name} />
            </div>
            <div className="px-6 py-4">
                <div className="relative bottom-4 left-1/2 transform -translate-x-1/2 bg-gray-100 bg-opacity-75 px-4 py-2 rounded-md">
                    <h3 className="text-xl font-bold text-gray-800">{name}</h3>
                </div>
                <div className="font-bold text-md mb-2">{location}</div>
                <p className="text-gray-700 text-base mb-4">{description}</p>
                <div className="flex items-center">
                    <div className="flex items-center">
                        {[...Array(Math.floor(rating))].map((e, i) => (
                            <i key={i} className="fas fa-star text-yellow-500"></i>
                        ))}
                        {rating % 1 !== 0 && (
                            <i className="fas fa-star-half-alt text-yellow-500"></i>
                        )}
                    </div>
                </div>
                <span className="text-red-500 ml-2 font-semibold">{pricerange}</span>
                <button
                    style={{ backgroundColor: "navy" }}
                    className="hover:bg-red-300 text-white font-bold py-2 px-4 rounded mt-4 ml-6"
                    onClick={handle}
                >
                    Take a Look
                </button>
            </div>

            {showRooms && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div
                        className="bg-white p-8 rounded-lg shadow-lg relative"
                        style={{
                            width: '1000px',
                            height: '700px',
                            overflowY: 'auto',
                        }}
                    >
                        <button
                            className="absolute top-4 right-4 bg-red-500 text-white px-4 py-2 rounded"
                            onClick={closePopup}
                            style={{ zIndex: "1001" }}
                        >
                            Close
                        </button>
                        <div className="grid grid-cols-2 gap-8" style={{ zIndex: "1000" }}>
                            {hotel.rooms.map((room, index) => (
                               <Roomcard
                               key={room._id}
                               hotel_id={id}
                               id={room._id}
                               type={room.type}
                               name={name}  // Assign a default name if `name` is missing
                               pictures={room.pictures}
                               description={room.description}
                               isAvailable={room.isAvailable}
                               price={room.price}
                               hotel={hotel}
                           />
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

HotelCard.propTypes = {
    id: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    pricerange: PropTypes.string.isRequired,
    hotel: PropTypes.shape({
        rooms: PropTypes.arrayOf(
            PropTypes.shape({
                _id: PropTypes.string.isRequired,
                type: PropTypes.string.isRequired,
                pictures: PropTypes.arrayOf(PropTypes.string).isRequired,
                description: PropTypes.string.isRequired,
                isAvailable: PropTypes.bool.isRequired,
                price: PropTypes.number.isRequired,
            })
        ).isRequired,
    }).isRequired,
};

export default HotelCard;
