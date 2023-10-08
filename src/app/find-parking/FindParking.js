"use client";
import { useRef, useEffect, useState } from "react";
import * as tt from "@tomtom-international/web-sdk-maps";

export const FindParking = () => {
    const mapElement = useRef();
    const [longitude, setLongitude] = useState(-83.924662968);
    const [latitude, setLatitude] = useState(35.950996196);
    const [mapZoom, setMapZoom] = useState(13);
    const [map, setMap] = useState({});

    const UTKCoordinates = [-83.924662968, 35.950996196]; // lon/lan

    useEffect(() => {
        let map = tt.map({
            key: "XkE0uaf3yFailhrm8bUF7tPeZeCXAqZ8",
            container: mapElement.current,
            center: UTKCoordinates,
            zoom: 20,
        });

        const marker = new tt.Marker().setLngLat(UTKCoordinates).addTo(map);
        setMap(map);

        return () => map.remove();
    }, []);

    return (
        <div ref={mapElement} className="Find-parking w-2/3 h-screen"></div>
        // <div className="flex">
        //   <div className="w-1/3 bg-green-400">
        //     <hr className="h-2 bg-[#FF8200] border-0"></hr>
        //     <h1 className="text-white bg-[#313e48] text-3xl px-8 py-2">Park UTK</h1>  
        //     <h1>Hi</h1>
        //   </div>
        //   <div ref={mapElement} className="Find-parking w-2/3"></div>
        // </div>
    );
};
