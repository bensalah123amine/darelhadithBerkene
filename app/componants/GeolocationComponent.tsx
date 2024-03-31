'use client'
import { useState, useEffect } from 'react';

const MapBasedOnLocation: React.FC = () => {
  const [position, setPosition] = useState<{ latitude: number | null; longitude: number | null }>({
    latitude: null,
    longitude: null
  });

  useEffect(() => {
    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (pos) => {
            setPosition({
              latitude:  35.0065615,
              longitude: -2.335551
            });
          },
          (error) => {
            console.error('Error getting geolocation:', error);
          }
        );
      } else {
        console.error('Geolocation is not supported by this browser.');
      }
    };

    getLocation();
  }, []);

  return (
    <div>
      {position.latitude && position.longitude ? (
        <div>
          <p>Your current location:</p>
          <p>Latitude: {position.latitude}, Longitude: {position.longitude}</p>
          {/* Here you can integrate a map component, like Google Maps, Mapbox, Leaflet, etc. */}
          {/* Example using Google Maps */}
          <iframe
            width="500"
            height="450"
            loading="lazy"
            allowFullScreen
            src={`https://maps.google.com/maps?q=${position.latitude},${position.longitude}&output=embed`}
            frameBorder="0"
            style={{ border: 0 }}
            title="User Location"
          />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default MapBasedOnLocation;
