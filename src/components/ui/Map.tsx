import { FC, useEffect, useState } from 'react';
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
interface TravelMapProps {
  lot: string | null;
  lang: string | null;
}
const MapComponent: FC<TravelMapProps> = ({
  lot,
  lang
}) => {
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
          setPosition([Number(lang), Number(lot)]);
        }
      );
    } else {
      setPosition([Number(lang), Number(lot)]);
    }
  }, []);

  return (
    <MapContainer center={position || [Number(lang), Number(lot)]} zoom={13} className='relative z-30' style={{ height: "400px", width: "100%" }}>
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
