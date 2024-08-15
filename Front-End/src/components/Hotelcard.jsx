import React from 'react';

function HotelCard(hotel) {
return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg border border-gray-300">
        <div className="relative">
            <img
                className="w-full h-80 object-cover"
                src={hotel.image}
                alt="Hotel"
            />
            
        </div>
        <div className="px-6 py-4">
          <div className=" relative bottom-4 left-1/2 transform -translate-x-1/2 bg-gray-100 bg-opacity-75 px-4 py-2 rounded-md">
                <h3 className="text-xl font-bold text-gray-800">{hotel.name}</h3>
            </div>
            <div className="font-bold text-md mb-2">
                {hotel.location}
            </div>
            <p className="text-gray-700 text-base mb-4">
                {hotel.description}
            </p>
            <div className="flex items-center">
                <div className="flex items-center">
                    { [...Array(hotel.rating)].map((e, i) => <i key={i} className="fas fa-star text-yellow-500"></i>) }
                    {/* <i className="fas fa-star text-yellow-500"></i>
                    <i className="fas fa-star text-yellow-500"></i>
                    <i className="fas fa-star text-yellow-500"></i>
                    <i className="fas fa-star text-yellow-500"></i>
                    <i className="fas fa-star-half-alt text-yellow-500"></i> */}
                </div>
            </div>
            <span className="text-red-500 ml-2 font-semibold">{hotel.pricerange}</span>
        </div>
    </div>
);
}

export default HotelCard;
