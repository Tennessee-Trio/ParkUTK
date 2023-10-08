"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";

export default function FindParking() {
  const utkCoordinates = [-83.924662968, 35.950996196];

  const garageIcon = new Icon({
    iconUrl: "/marker-icon.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -30]
  });

  return (
    <>
      <hr className="h-2 bg-[#FF8200] border-0"></hr>
      <h1 className="text-white bg-[#313e48] text-3xl px-8 py-2">Park UTK</h1>

      <MapContainer
        className="h-[calc(100vh-60px)]"
        center={[35.9572666073227, -83.92894490123355]}
        zoom={15}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker
          position={[35.95797921826765, -83.93197406178757]}
          icon={garageIcon}
        >
          <Popup>
            <h1>White Avenue Parking Garage</h1>
            Estimated parking spots: 10-20<br/>
            Last Updated: 5 min ago
          </Popup>
        </Marker>

        <Marker
          position={[35.95351904825186, -83.92393497849766]}
          icon={garageIcon}
        >
          <Popup>Neyland Garage</Popup>
        </Marker>

        <Marker
          position={[35.95460811672249, -83.93379379139853]}
          icon={garageIcon}
        >
          <Popup>Terrace Avenue Parking Garage</Popup>
        </Marker>

        <Marker
          position={[35.95974721358193, -83.92529528555826]}
          icon={garageIcon}
        >
          <Popup>11th St Parking Garage</Popup>
        </Marker>

        <Marker
          position={[35.951209287591126, -83.92979662787423]}
          icon={garageIcon}
        >
          <Popup>Stokely Hall Garage</Popup>
        </Marker>

        <Marker
          position={[35.95892034378138, -83.92984735786756]}
          icon={garageIcon}
        >
          <Popup>Volunteer Hall Parking Garage</Popup>
        </Marker>
      </MapContainer>
    </>
  );
}
