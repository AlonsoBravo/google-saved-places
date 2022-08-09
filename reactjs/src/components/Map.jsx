import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { GoogleMap, Marker } from '@react-google-maps/api';

const Map = () => {
  const [mapCenter, setMapCenter] = useState({ lat: -3.745, lng: -38.523 });

  const selectedPlace = useSelector(
    ({ PlacesList }) => PlacesList.selectedPlace?.geometry.location
  );

  useEffect(() => {
    if (selectedPlace) {
      setMapCenter({ lat: selectedPlace.lat(), lng: selectedPlace.lng() });
    }
  }, [selectedPlace]);

  return (
    <GoogleMap
      mapContainerStyle={{ width: '100%' }}
      center={mapCenter}
      zoom={15}
    >
      {selectedPlace && (
        <Marker
          position={{
            lat: selectedPlace?.lat(),
            lng: selectedPlace?.lng(),
          }}
        />
      )}
    </GoogleMap>
  );
};

export default Map;
