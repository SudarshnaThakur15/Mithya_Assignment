import React, { useEffect, useState } from 'react';
import HotelCard from './Hotelcard.jsx';
import axios from 'axios';

function Home() {
  const [hotels, setHotels] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const response = await axios.get('/api/hotels/allhotels');
        setHotels(response.data);
      } catch (error) {
        console.error('Error fetching hotels:', error);
        setError(error);
      }
    };
    fetchHotels();
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      {hotels.length > 0 ? (
        hotels.map((hotel, index) => (
          <HotelCard
            key={index}
            image={hotel.images[0]}
            name={hotel.name}
            location={hotel.location}
            description={hotel.description}
            pricerange={hotel.price_range}
            rating={hotel.rating}
          />
        ))
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default Home;
