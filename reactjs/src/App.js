import './App.css';
import { Map, PlacesList, PlaceInfo } from './components';
import { useJsApiLoader } from '@react-google-maps/api';

function App() {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries: ['places'],
  });

  return (
    <div className='App'>
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
