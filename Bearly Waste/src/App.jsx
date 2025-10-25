import React, { useEffect, useRef, useState } from 'react';
import {createRoot} from "react-dom/client";
import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
  useMap
} from '@vis.gl/react-google-maps';

const locations = [
  {key: 'goodEarth', location: { lat: 39.860569, lng: -79.06898499  }},
  {key: 'sunsetRecy1', location: { lat: 33.8317558, lng: -118.215402 }},
  {key: 'sunsectRecy2', location: { lat: 33.8478802, lng: -118.1156596 }},
  {key: 'leyvaTopline', location: { lat: 33.8587425, lng: -118.1684761 }},
  {key: 'conservCorps', location: { lat: 33.7690054, lng: -118.1329515 }},
];

const App = () => (
  <APIProvider apiKey={'AIzaSyBQMbzhpo6wO7IiukBWv_VpF-YRu8Qv4rU'} onLoad={() => console.log('Maps API has loaded.')}>
    <Map
      defaultZoom={13}
      defaultCenter={ { lat: 33.7874282, lng: -118.1144116 } }
      onCameraChanged={ ev =>
        console.log('camera changed:', ev.detail.center, 'zoom:', ev.detail.zoom)
      }>
        <PoiMarkers pois={locations} />
    </Map>
  </APIProvider>
);

const PoiMarkers = (props) => {
  const map = useMap();
  const [markers, setMarkers] = useState({});
  const clusterer = useRef(null);

  // Initialize MarkerClusterer, if the map has changed
  useEffect(() => {
    if (!map) return;
    if (!clusterer.current) {
      // MarkerClusterer may be provided by the Google Maps libs; create if available
      // eslint-disable-next-line no-undef
      if (typeof MarkerClusterer !== 'undefined') {
        // eslint-disable-next-line no-undef
        clusterer.current = new MarkerClusterer({map});
      } else {
        clusterer.current = null;
      }
    }
  }, [map]);

  // Update markers, if the markers object has changed
  useEffect(() => {
    if (!clusterer.current) return;
    if (clusterer.current.clearMarkers) clusterer.current.clearMarkers();
    if (clusterer.current.addMarkers) clusterer.current.addMarkers(Object.values(markers));
  }, [markers]);

  const setMarkerRef = (marker, key) => {
    if (marker && markers[key]) return;
    if (!marker && !markers[key]) return;

    setMarkers(prev => {
      if (marker) {
        return {...prev, [key]: marker};
      } else {
        const newMarkers = {...prev};
        delete newMarkers[key];
        return newMarkers;
      }
    });
  };

  return (
    <>
      {props.pois.map( (poi) => (
        <AdvancedMarker
          key={poi.key}
          position={poi.location}
          ref={marker => setMarkerRef(marker, poi.key)}
          >
            <Pin background={'#FBBC04'} glyphColor={'#000'} borderColor={'#000'} />
        </AdvancedMarker>
      ))}
    </>
  );
};

const root = createRoot(document.getElementById('app'));
root.render(<App />);

export default App;

