import React, { useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import InfoPanel from "../components/InfoPanel";
import { MapContainer, TileLayer, Circle } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function Dashboard() {
  const [region] = useState({
    name: "East District",
    index: 78,
    population: "45,230",
    wards: 12,
    gaps: 8,
  });

  return (
    <div className="page-container">
      <Header />

      <div className="main-layout">
        <Sidebar />

        {/* MAP */}
        <div className="map-container">
          <MapContainer
            center={[23.2599, 77.4126]}
            zoom={5}
            style={{ height: "100%", width: "100%", borderRadius: "20px" }}
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

            {/* Glow Heat Circles */}
            <Circle
              center={[28.6, 77.2]}
              radius={50000}
              pathOptions={{ color: "red", fillColor: "red", fillOpacity: 0.4 }}
            />
            <Circle
              center={[19.07, 72.87]}
              radius={40000}
              pathOptions={{ color: "orange", fillColor: "orange", fillOpacity: 0.4 }}
            />
            <Circle
              center={[12.97, 77.59]}
              radius={30000}
              pathOptions={{ color: "green", fillColor: "green", fillOpacity: 0.4 }}
            />
          </MapContainer>
        </div>

        <InfoPanel region={region} />
      </div>
    </div>
  );
}

export default Dashboard;