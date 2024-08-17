import React, { useEffect, useState } from 'react';
import HotelCard from './Hotelcard.jsx';
import axios from 'axios';
const apiUrl = import.meta.env.VITE_API_URL;

function Home() {
  const [hotels, setHotels] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const response = await axios.get(`${apiUrl}/api/hotels/allhotels`);
        setHotels(response.data);
      } catch (error) {
        console.error('Error fetching hotels:', error);
        setError(error);
      }
    };
    fetchHotels();
  }, [hotels]);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="mx-auto" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', width: '80%', marginTop: '20px'}}>
      {hotels.length > 0 ? (
        hotels.map((hotel, index) => (
          <div key={index} style={{ width: '30%', marginBottom: '20px', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)' }}>
            <HotelCard
              id={hotel._id}
              image={hotel.images[0]}
              name={hotel.name}
              location={hotel.location}
              description={hotel.description}
              pricerange={hotel.price_range}
              rating={hotel.rating}
              hotel={hotel}
            />
          </div>
        ))
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default Home;
