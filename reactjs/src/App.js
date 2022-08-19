import React, { useEffect } from 'react';
import './App.css';
import { Map, PlacesList, PlaceInfo, Alert } from './components';
import { useJsApiLoader } from '@react-google-maps/api';
import { useSelector, useDispatch } from 'react-redux';
import {
  onStartLoadPlaces,
  onSuccessLoadPlaces,
} from './redux/actions/PlacesListActions';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

function App() {
  const dispatch = useDispatch();

  const errorMessage = useSelector(({ PlacesList }) => PlacesList.errorMessage);
  const onLoadPlaces = useSelector(
    ({ PlacesList }) => PlacesList.onStartLoadPlaces
  );

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries: ['places'],
  });

  useEffect(() => {
    dispatch(onStartLoadPlaces());

    const savedPlaces = JSON.parse(
      localStorage.getItem('saved_places') || '[]'
    );

    setTimeout(() => {
      dispatch(onSuccessLoadPlaces(savedPlaces));
    }, 2000);
  }, []);

  useEffect(() => {
    if (onLoadPlaces) {
      MySwal.fire({ title: 'Loading saved places...' });
      MySwal.showLoading();
    } else {
      if (MySwal.isVisible) {
        MySwal.close();
      }
    }
  }, [onLoadPlaces]);

  return (
    <div className='App'>
      {errorMessage && <Alert type='DANGER' message={errorMessage} />}
      {isLoaded && (
        <div style={{ display: 'flex', flexDirection: 'row', height: '100%' }}>
          <PlacesList />
          <Map />
        </div>
      )}
      <PlaceInfo />
    </div>
  );
}

export default App;
