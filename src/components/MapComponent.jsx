// MapComponent.js
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import markerIconPng from "leaflet/dist/images/marker-icon.png";

const MapComponent = () => {
  return (
    <MapContainer center={[1.3111, 103.8567]} zoom={16} style={{ height: "200px", width: "100%", borderRadius: "15px" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker
        position={[1.3111, 103.8567]}
        icon={L.icon({ iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41] })}
      >
        <Popup>
          91 Kitchener Rd, #01-02, Singapore 208509
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;
