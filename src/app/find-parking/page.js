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


//export default function FindParking() {
//   return (
//     <main>
//         <hr className="h-2 bg-[#FF8200] border-0"></hr>
//         <h1 className="text-white bg-[#313e48] text-3xl px-8 py-2">Park UTK</h1>
//         <h1 className="br-white text-[#313e48] text-3xl px-8 py-2">Find Parking</h1>
//     </main>

// )
// }