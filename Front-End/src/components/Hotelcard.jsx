import React from 'react';

function HotelCard({ image, name, location, description, rating, pricerange }) {
    return (
        <div className="max-w-sm rounded-lg overflow-hidden shadow-lg border border-gray-300 ">
            <div className="relative">
                <img
                    className="w-full h-80 object-cover"
                    src={image}
                    alt={name}
                />
            </div>
            <div className="px-6 py-4">
                <div className="relative bottom-4 left-1/2 transform -translate-x-1/2 bg-gray-100 bg-opacity-75 px-4 py-2 rounded-md">
                    <h3 className="text-xl font-bold text-gray-800">{name}</h3>
                </div>
                <div className="font-bold text-md mb-2">
                    {location}
                </div>
                <p className="text-gray-700 text-base mb-4">
                    {description}
                </p>
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
                <button style={{backgroundColor:"navy"}} className=" hover:bg-red-300 text-white font-bold py-2 px-4 rounded mt-4 ml-6">Take a Look</button>
            </div>
        </div>
    );
}

export default HotelCard;
