import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { onSelectedPlace } from '../../redux/actions/PlacesListActions';
import { StandaloneSearchBox } from '@react-google-maps/api';

import './styles.css';

const searchBox = React.createRef();

const PlacesList = () => {
  const PlacesList = useSelector(({ PlacesList }) => PlacesList);
  const dispatch = useDispatch();

  return (
    <div id='places-list-container'>
      <StandaloneSearchBox
        onPlacesChanged={() => {
          dispatch(onSelectedPlace(searchBox.current?.getPlaces()));
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
