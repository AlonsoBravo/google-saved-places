import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { onSelectedPlace } from '../../redux/actions/PlacesListActions';
import { StandaloneSearchBox } from '@react-google-maps/api';
import ReactTooltip from 'react-tooltip';

import './styles.css';

const searchBox = React.createRef();

const PlacesList = () => {
  const selectedPlaces = useSelector(
    ({ PlacesList }) => PlacesList.selectedPlaces
  );
  const dispatch = useDispatch();

  useEffect(() => {
    ReactTooltip.rebuild();
  });

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
      <div id='places-list'>
        {selectedPlaces.length === 0 ? (
          <span id='place-list-empty'>You list is empty...</span>
        ) : (
          selectedPlaces.map((place) => (
            <div
              key={place.place_id}
              className='places-list-item-container'
              onClick={() => {}}
            >
              <div className='places-list-item-info'>
                <span>{place.formatted_address}</span>
                <p>{place.placeNote}</p>
              </div>
              <div className='places-list-item-actions'>
                <i
                  class='bi bi-geo-alt pin-icon'
                  data-tip
                  data-for='pin-icon'
                ></i>
                <i class='bi bi-trash trash-icon'></i>
              </div>
            </div>
          ))
        )}
      </div>
      <ReactTooltip id='pin-icon' type='info' place='right'>
        <span>Show place in map</span>
      </ReactTooltip>
    </div>
  );
};

export default PlacesList;
