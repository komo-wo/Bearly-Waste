import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin
} from '@vis.gl/react-google-maps';

const locations = [
  { key: 'goodEarth', location: { lat: 39.860569, lng: -79.068985 } },
  { key: 'sunsetRecy1', location: { lat: 33.8317558, lng: -118.215402 } },
  { key: 'sunsectRecy2', location: { lat: 33.8478802, lng: -118.1156596 } },
  { key: 'leyvaTopline', location: { lat: 33.8587425, lng: -118.1684761 } },
  { key: 'conservCorps', location: { lat: 33.7690054, lng: -118.1329515 } },
];

export default function RecycleMap() {
  return (
    <APIProvider apiKey="YOUR_GOOGLE_MAPS_API_KEY">
      <div className="w-full h-64 rounded-xl overflow-hidden border border-emerald-300 mt-4">
        <Map
          defaultZoom={12}
          defaultCenter={{ lat: 33.7874282, lng: -118.1144116 }}
          gestureHandling="greedy"
          disableDefaultUI={true}
        >
          {locations.map((poi) => (
            <AdvancedMarker key={poi.key} position={poi.location}>
              <Pin
                background="#FBBC04"
                glyphColor="#000"
                borderColor="#000"
              />
            </AdvancedMarker>
          ))}
        </Map>
      </div>
    </APIProvider>
  );
}
