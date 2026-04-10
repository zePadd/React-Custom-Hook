import { useState, useEffect } from 'react';

export const useGeolocation = () => {
  const [currentLocation, setCurrentLocation] = useState(null);

  useEffect(() => {
    if (!navigator.geolocation) {
      console.error('Geolocation is not supported by this browser.');
      return;
    }

    const success = (position) => {
      setCurrentLocation({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      });
    };

    const error = (err) => {
      console.error('Error getting geolocation: ', err);
    };

    navigator.geolocation.getCurrentPosition(success, error);
  }, []);

  return currentLocation;
};