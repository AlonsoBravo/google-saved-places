import React from 'react';
import './styles.css';

const PlaceInfo = () => {
  return (
    <div id='place-info-container'>
      <h1>place info</h1>
      <div id='place-info-note-container'>
        <textarea id='place-info-note' placeholder='You can add a note...' />
        <button
          id='place-info-save-button'
          type='button'
          class='btn btn-primary'
        >
          Save place
        </button>
      </div>
    </div>
  );
};

export default PlaceInfo;
