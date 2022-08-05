import React from 'react';
import { StandaloneSearchBox } from '@react-google-maps/api';

import './styles.css';

const searchBox = React.createRef();

const PlacesList = () => {
  return (
    <div id='places-list-container'>
      <StandaloneSearchBox
        onPlacesChanged={() => {
          console.log(searchBox.current?.getPlaces());
        }}
        onLoad={(ref) => {
          searchBox.current = ref;
        }}
      >
        <input type='text' id='search-input' placeholder='Search a place...' />
      </StandaloneSearchBox>
      <div id='places-list'></div>
    </div>
  );
};

export default PlacesList;
