"use client";

import { useRef, useEffect, useState } from "react";
import * as tt from "@tomtom-international/web-sdk-maps";

const FindParking = () => {
  const mapElement = useRef();
  const [longitude, setLongitude] = useState(-0.112869);
  const [latitude, setLatitude] = useState(51.504);
  const [mapZoom, setMapZoom] = useState(13);
  const [map, setMap] = useState({});

  useEffect(() => {
    let map = tt.map({
      key: "XkE0uaf3yFailhrm8bUF7tPeZeCXAqZ8",
      container: mapElement.current,
    });
    setMap(map);
  }, []);

  return (
    <div className="Find-parking">
      <div ref={mapElement}></div>
    </div>
  );
};

export default FindParking;
