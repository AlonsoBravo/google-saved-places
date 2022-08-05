import './App.css';
import { Map, PlacesList } from './components';
import { useJsApiLoader } from '@react-google-maps/api';

function App() {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: 'AIzaSyBFBp-CdY4Jv4gvRLOw52kXMkVFfbP6Tl8',
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
    </div>
  );
}

export default App;
