"use client";

import { useRef, useEffect, useState } from "react";
import * as tt from "@tomtom-international/web-sdk-maps";

const FindParking = () => {
  const mapElement = useRef();
  const [longitude, setLongitude] = useState(-0.112869);
  const [latitude, setLatitude] = useState(51.504);
  const [mapZoom, setMapZoom] = useState(13);
  const [map, setMap] = useState({});

  const knoxvilleCoordinates = [-83.926453, 35.964668];
  
  useEffect(() => {
    let map = tt.map({
      key: "XkE0uaf3yFailhrm8bUF7tPeZeCXAqZ8",
      container: mapElement.current,
    });

    const marker = new tt.Marker().setLngLat(knoxvilleCoordinates).addTo(map);
    setMap(map);
  }, []);

  return (
    <div className="flex">
      <div className="w-1/3 bg-green-400">
        <hr className="h-2 bg-[#FF8200] border-0"></hr>
        <h1 className="text-white bg-[#313e48] text-3xl px-8 py-2">Park UTK</h1>  
        <h1>Hi</h1>
      </div>
      <div ref={mapElement} className="Find-parking w-2/3 h-full"></div>
    </div>
  );
};

export default FindParking;
