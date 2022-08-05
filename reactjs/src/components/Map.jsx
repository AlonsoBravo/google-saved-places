import React from 'react';
import { GoogleMap, Marker } from '@react-google-maps/api';

const Map = () => {
  return (
    <GoogleMap
      mapContainerStyle={{ width: '100%' }}
      center={{ lat: -3.745, lng: -38.523 }}
      zoom={10}
    ></GoogleMap>
  );
};

export default Map;
