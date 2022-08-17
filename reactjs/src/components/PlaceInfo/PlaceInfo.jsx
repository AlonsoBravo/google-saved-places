import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  onSelectedPlace,
  onSavePlace,
} from '../../redux/actions/PlacesListActions';
import './styles.css';

const PlaceInfo = () => {
  const selectedPlace = useSelector(
    ({ PlacesList }) => PlacesList.selectedPlace
  );

  const [placeNote, setPlaceNote] = useState();

  const dispatch = useDispatch();

  useEffect(() => {
    setPlaceNote(selectedPlace?.placeNote);
  }, [selectedPlace]);

  return (
    <div
      id={selectedPlace ? 'place-info-container' : 'place-info-container-hide'}
      style={
        selectedPlace && { transform: 'translateY(0em)', visibility: 'visible' }
      }
    >
      <div
        id='place-info-container-close'
        onClick={() => dispatch(onSelectedPlace(null))}
      >
        <span>x</span>
      </div>
      <h3>{selectedPlace?.formatted_address}</h3>
      {selectedPlace?.website && (
        <a href={selectedPlace?.website} target='_blank' rel='noreferrer'>
          Visit web site
        </a>
      )}

      <div id='place-info-note-container'>
        <textarea
          id='place-info-note'
          placeholder='You can add a note...'
          value={placeNote}
          onChange={(e) => setPlaceNote(e.target.value)}
        />
        <button
          id='place-info-save-button'
          type='button'
          className='btn btn-primary'
          onClick={() => {
            dispatch(onSavePlace({ ...selectedPlace, placeNote }));

            setPlaceNote('');
          }}
        >
          Save place
        </button>
      </div>
    </div>
  );
};

export default PlaceInfo;
