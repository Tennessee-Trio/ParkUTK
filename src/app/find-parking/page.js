"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import { useState, useEffect } from "react";
import dayjs from "dayjs";

export default function FindParking() {
  const [data, setData] = useState(null);
  const utkCoordinates = [-83.924662968, 35.950996196];

  useEffect(() => {
    Promise.all([
      fetch(
        "/api/parking-spots?mostRecent=true&garage=11th%20Street%20Garage%20(G13)"
      ),
      fetch(
        "/api/parking-spots?mostRecent=true&garage=Neyland%20Drive%20Garage%20(G10)"
      ),

      fetch(
        "/api/parking-spots?mostRecent=true&garage=Terrace%20Avenue%20Parking%20Garage%20(G17)"
      ),
      fetch(
        "/api/parking-spots?mostRecent=true&garage=Volunteer%20Boulevard%20Parking%20Garage%20(G16)"
      ),
      fetch(
        "/api/parking-spots?mostRecent=true&garage=Volunteer%20Hall%20(G15)"
      ),
      fetch(
        "/api/parking-spots?mostRecent=true&garage=White%20Avenue%20Parking%20Garage%20(G12)"
      ),
    ])
      .then((responses) => {
        return Promise.all(responses.map((response) => response.json()));
      })
      .then((data) => setData(data));
  }, []);

  if (data) {
    return (
      <MapContainer
        className="h-[500px]"
        center={[35.9572666073227, -83.92894490123355]}
        zoom={16}
        scrollWheelZoom={false}
      >
        {data.map((recentResponse, index) => {
          const information = recentResponse.payload;
          const formattedTime = dayjs(information.date).format("h:mma");
          const formattedDate = dayjs(information.date).format("DD/MM");
          return (
            <Marker
              position={[information.latitude, information.longitude]}
              icon={
                new Icon({
                  iconUrl: "/marker-icon.png",
                  iconSize: [25, 41],
                  iconAnchor: [12, 41],
                })
              }
              key={index}
            >
              <Popup>
                <h1 className="text-xl">{information.parkingGarage}</h1>
                <p>
                  The most recent report is from {formattedTime} on{" "}
                  {formattedDate}.
                </p>
                <p>There are {information.range} parking spots available.</p>
              </Popup>
            </Marker>
          );
        })}
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    );
  }
}
