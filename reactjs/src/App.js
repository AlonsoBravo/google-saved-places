import './App.css';
import { Map, PlacesList, PlaceInfo, Alert } from './components';
import { useJsApiLoader } from '@react-google-maps/api';
import { useSelector } from 'react-redux';

function App() {
  const errorMessage = useSelector(({ PlacesList }) => PlacesList.errorMessage);

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries: ['places'],
  });

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
