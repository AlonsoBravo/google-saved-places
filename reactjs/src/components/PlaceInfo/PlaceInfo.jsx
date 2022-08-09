import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { onSelectedPlace } from '../../redux/actions/PlacesListActions';
import './styles.css';

const PlaceInfo = () => {
  const selectedPlace = useSelector(
    ({ PlacesList }) => PlacesList.selectedPlace[0]
  );
  const dispatch = useDispatch();

  return (
    <div
      id={selectedPlace ? 'place-info-container' : 'place-info-container-hide'}
      style={
        selectedPlace && { transform: 'translateY(0em)', visibility: 'visible' }
      }
    >
      <div
        id='place-info-container-close'
        onClick={() => dispatch(onSelectedPlace([]))}
      >
        <span>x</span>
      </div>
      <h1>place info</h1>
      <div id='place-info-note-container'>
        <textarea id='place-info-note' placeholder='You can add a note...' />
        <button
          id='place-info-save-button'
          type='button'
          class='btn btn-primary'
          onClick={() => {}}
        >
          Save place
        </button>
      </div>
    </div>
  );
};

export default PlaceInfo;
