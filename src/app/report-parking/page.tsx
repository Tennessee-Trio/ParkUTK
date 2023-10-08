"use client";

import { useState } from "react";
import Link from "next/link";

interface IndexableObject {
  [key: string]: any;
}

export default function ReportParking() {
  const parkingGarages = [
    "11th Street Garage (G13)",
    "Neyland Drive Garage (G10)",
    "Terrace Avenue Parking Garage (G17)",
    "Volunteer Boulevard Parking Garage (G16)",
    "Volunteer Hall (G15)",
    "White Avenue Parking Garage (G12)",
  ];

  const parkingGarageLatitudes: IndexableObject = {
    "11th Street Garage (G13)": 35.95974721358193,
    "Neyland Drive Garage (G10)": 35.95351904825186,
    "Terrace Avenue Parking Garage (G17)": 35.95460811672249,
    "Volunteer Boulevard Parking Garage (G16)": 35.951209287591126,
    "Volunteer Hall (G15)": 35.95892034378138,
    "White Avenue Parking Garage (G12)": 35.95797921826765,
  };

  const parkingGarageLongitudes: IndexableObject = {
    "11th Street Garage (G13)": -83.92529528555826,
    "Neyland Drive Garage (G10)": -83.92393497849766,
    "Terrace Avenue Parking Garage (G17)": -83.93379379139853,
    "Volunteer Boulevard Parking Garage (G16)": -83.92979662787423,
    "Volunteer Hall (G15)": -83.92984735786756,
    "White Avenue Parking Garage (G12)": -83.93197406178757,
  };

  const ranges = ["0 - 5", "5 - 10", "10 - 20", "20 - 40", "40+"];

  const [selectedParkingGarage, setSelectedParkingGarage] = useState<string>(
    "11th Street Garage (G13)"
  );
  const [selectedRange, setSelectedRange] = useState<string>("0 - 5");

  const handleParkingGarageChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedParkingGarage(event.target.value);
  };

  const handleRangeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedRange(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const request = {
      parkingGarage: selectedParkingGarage,
      date: new Date().toISOString(),
      range: selectedRange,
      latitude: parkingGarageLatitudes[selectedParkingGarage],
      longitude: parkingGarageLongitudes[selectedParkingGarage],
    };

    fetch("/api/parking-spots", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ request }),
    });
  };

  return (
    <main>
      <hr className="h-2 bg-[#FF8200] border-0"></hr>
      <h1 className="text-white bg-[#313e48] text-3xl px-8 py-2 cursor-pointer"><Link href={"/"}>Park UTK</Link></h1>
      <h1 className="br-white text-[#313e48] text-2xl px-8 py-2">
        Report Parking
      </h1>

      <div className="w-fit bg-[#FF8200] text-[#313e48] mx-8 px-4 py-2">
        <form onSubmit={handleSubmit}>
          <select
            value={selectedParkingGarage}
            onChange={handleParkingGarageChange}
          >
            {parkingGarages.map((garage, index) => {
              return (
                <option value={garage} key={index}>
                  {garage}
                </option>
              );
            })}
          </select>

          <select value={selectedRange} onChange={handleRangeChange}>
            {ranges.map((range, index) => {
              return (
                <option value={range} key={index}>
                  {range}
                </option>
              );
            })}
          </select>

          <input className="mx-4" type="submit" />
        </form>

        <h1>Current parking garage: {selectedParkingGarage}</h1>
        <h1>Current range: {selectedRange}</h1>
      </div>
    </main>
  );
}
