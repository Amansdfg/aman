import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

function AlmatyMap(){
  const position = [43.250, 76.801]; 

  return (
    <MapContainer center={position} zoom={13} style={{ height: "30vh", width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
        <Popup>Almaty</Popup>
      </Marker>
    </MapContainer>
  );
};

export default AlmatyMap;
