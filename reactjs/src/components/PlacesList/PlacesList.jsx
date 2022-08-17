import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  onSelectedPlace,
  onErrorShowPlace,
  onDeletePlaces,
} from '../../redux/actions/PlacesListActions';
import { StandaloneSearchBox } from '@react-google-maps/api';
import ReactTooltip from 'react-tooltip';

import './styles.css';

const searchBox = React.createRef();
const searchInput = React.createRef();

const PlacesList = () => {
  const selectedPlaces = useSelector(
    ({ PlacesList }) => PlacesList.selectedPlaces
  );

  const [searchValue, setSearchValue] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    ReactTooltip.rebuild();
  });

  return (
    <div id='places-list-container'>
      <div id='place-list-search-box-container'>
        <div id='search-input-container'>
          <StandaloneSearchBox
            onPlacesChanged={() => {
              const selectedPlace = searchBox.current?.getPlaces();

              if (!selectedPlace) {
                dispatch(
                  onErrorShowPlace(
                    'An error occurred when selecting a place...'
                  )
                );

                return;
              }

              dispatch(onSelectedPlace(selectedPlace));
            }}
            onLoad={(ref) => {
              searchBox.current = ref;
            }}
          >
            <input
              type='text'
              id='search-input'
              placeholder='Search a place...'
              value={searchValue}
              ref={searchInput}
              onChange={(e) => setSearchValue(e.target.value)}
            />
          </StandaloneSearchBox>
        </div>
        {searchValue && (
          <div
            id='search-input-clean'
            onClick={() => {
              searchInput.current?.focus();

              dispatch(onSelectedPlace(null));
              setSearchValue('');
            }}
          >
            <span>x</span>
          </div>
        )}
      </div>
      <div id='places-list'>
        {selectedPlaces.length === 0 ? (
          <span id='place-list-empty'>You list is empty...</span>
        ) : (
          selectedPlaces.map((place) => (
            <div key={place.place_id} className='places-list-item-container'>
              <div className='places-list-item-info'>
                <span>{place.formatted_address}</span>
                <p>{place.placeNote}</p>
              </div>
              <div className='places-list-item-actions'>
                <i
                  className='bi bi-geo-alt pin-icon'
                  data-tip
                  data-for='pin-icon'
                  onClick={() => {
                    dispatch(onSelectedPlace([place]));
                  }}
                ></i>
                <i
                  className='bi bi-trash trash-icon'
                  data-tip
                  data-for='trash-icon'
                  onClick={() => {
                    dispatch(onDeletePlaces(place));
                  }}
                ></i>
              </div>
            </div>
          ))
        )}
      </div>
      <ReactTooltip id='pin-icon' type='info' place='right'>
        <span>Show place in map</span>
      </ReactTooltip>
      <ReactTooltip id='trash-icon' type='warning' place='right'>
        <span>Remove this place</span>
      </ReactTooltip>
    </div>
  );
};

export default PlacesList;
