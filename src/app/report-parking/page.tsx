"use client";

import { useState } from "react";

interface IndexableObject {
  [key: string]: any;
}

export default function ReportParking() {
  const parkingGarages = [
    "11th Street Garage (G13)",
    "Administration Garage (G3/G4/G5)",
    "Lake Avenue Garage (G11)",
    "Locust Street Parking Garage",
    "McClung Plaza Garage (G1/G2)",
    "Neyland Drive Garage (G10)",
    "Pratt Pavilion (G14)",
    "Terrace Avenue Parking Garage (G17)",
    "Volunteer Boulevard Parking Garage(G16)",
    "Volunteer Hall (G15)",
    "West Campus Parking Garage (G7)",
    "White Avenue Parking Garage (G12)",
  ];

  const parkingGarageLatitudes: IndexableObject = {
    "11th Street Garage (G13)": 35.9591,
    "Administration Garage (G3/G4/G5)": 0,
    "Lake Avenue Garage (G11)": 0,
    "Locust Street Parking Garage": 0,
    "McClung Plaza Garage (G1/G2)": 0,
    "Neyland Drive Garage (G10)": 35.95169,
    "Pratt Pavilion (G14)": 0,
    "Terrace Avenue Parking Garage (G17)": 0,
    "Volunteer Boulevard Parking Garage(G16)": 0,
    "Volunteer Hall (G15)": 0,
    "West Campus Parking Garage (G7)": 0,
    "White Avenue Parking Garage (G12)": 0,
  };

  const parkingGarageLongitudes: IndexableObject = {
    "11th Street Garage (G13)": -83.92483,
    "Administration Garage (G3/G4/G5)": 0,
    "Lake Avenue Garage (G11)": 0,
    "Locust Street Parking Garage": 0,
    "McClung Plaza Garage (G1/G2)": 0,
    "Neyland Drive Garage (G10)": -83.92544,
    "Pratt Pavilion (G14)": 0,
    "Terrace Avenue Parking Garage (G17)": 0,
    "Volunteer Boulevard Parking Garage(G16)": 0,
    "Volunteer Hall (G15)": 0,
    "West Campus Parking Garage (G7)": 0,
    "White Avenue Parking Garage (G12)": 0,
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
      parkingGarageLongitudes: parkingGarageLongitudes[selectedParkingGarage],
    };

    fetch("/api/parking-spots", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ request }),
    });
  };

  const findAll = async () => {
    const response = await fetch("/api/parking-spots");
    const body = await response.json();
  };

  const find = async (parkingGarage: string) => {
    const response = await fetch(`/api/parking-spots?garage=${parkingGarage}`);
    const body = await response.json();
  };

  const findMostRecent = async (parkingGarage: string) => {
    const response = await fetch(
      `/api/parking-spots?mostRecent=true&garage=${parkingGarage}`
    );
    const body = await response.json();
  };

  return (
    <main>
      <hr className="h-2 bg-[#FF8200] border-0"></hr>
      <h1 className="text-white bg-[#313e48] text-3xl px-8 py-2">Park UTK</h1>
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

        <div>
          <button onClick={findAll}>CLICK TO GET ALL REPORTS</button>
        </div>
        <div>
          <button onClick={() => find(selectedParkingGarage)}>
            FIND TO GET CURRENT GARAGE'S REPORTS
          </button>
        </div>
        <div>
          <button onClick={() => findMostRecent(selectedParkingGarage)}>
            FIND TO GET CURRENT GARAGE'S MOST RECENT REPORT
          </button>
        </div>
      </div>
    </main>
  );
}
