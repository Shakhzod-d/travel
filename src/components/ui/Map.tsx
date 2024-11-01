import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L, { LatLngTuple } from 'leaflet';
import 'leaflet/dist/leaflet.css';

import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerIconRetina from 'leaflet/dist/images/marker-icon-2x.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

// Set up custom icon options
const defaultIcon = L.icon({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIconRetina,
  shadowUrl: markerShadow,
});

// Set the default icon to be used
L.Marker.prototype.options.icon = defaultIcon;

const MapComponent = () => {
  const [position, setPosition] = useState<LatLngTuple | null>(null); // Use LatLngTuple
  
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setPosition([latitude, longitude]); // Set position as LatLngTuple
        },
        (error) => {
          console.error("Error obtaining location: ", error);
          // Fallback to default position (London) if location can't be retrieved
          setPosition([41.2995, 69.2401]); // London coordinates
        }
      );
    } else {
      console.log("Geolocation is not supported by this browser.");
      // Fallback to default position (London) if geolocation is not supported
      setPosition([41.2995, 69.2401]); // London coordinates
    }
  }, []);

  return (
    <MapContainer center={position || [41.2995, 69.2401]} zoom={13} style={{ height: "400px", width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {position && ( // Render Marker only if position is defined
        <Marker position={position}>
          <Popup>
            You are here!<br />Latitude: {position[0]}<br />Longitude: {position[1]}
          </Popup>
        </Marker>
      )}
    </MapContainer>
  );
};

export default MapComponent;
