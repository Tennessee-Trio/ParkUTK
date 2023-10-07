"use client";

import { useState } from "react";

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

  return (
    <main>
      <h1>Report Parking</h1>

      <form onSubmit={handleSubmit}>
        <select
          value={selectedParkingGarage}
          onChange={handleParkingGarageChange}
          className="text-black"
        >
          {parkingGarages.map((garage, index) => {
            return (
              <option value={garage} key={index}>
                {garage}
              </option>
            );
          })}
        </select>

        <select
          value={selectedRange}
          onChange={handleRangeChange}
          className="text-black"
        >
          {ranges.map((range, index) => {
            return <option value={range} key={index}>{range}</option>;
          })}
        </select>

        <input type="submit" />
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
    </main>
  );
}
