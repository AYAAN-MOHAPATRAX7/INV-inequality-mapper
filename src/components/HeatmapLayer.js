import React from "react";
import { Circle } from "react-leaflet";

function HeatmapLayer({ setRegion }) {
  return (
    <>
      {/* DELHI */}
      <Circle
        center={[28.7041, 77.1025]}
        radius={50000}
        pathOptions={{
          color: "#ff4d4d",
          fillColor: "#ff4d4d",
          fillOpacity: 0.6
        }}
        eventHandlers={{
          click: () =>
            setRegion({
              name: "Delhi",
              index: 78,
              population: "45,230",
              wards: 12,
              gaps: 8
            })
        }}
      />

      {/* MUMBAI */}
      <Circle
        center={[19.076, 72.8777]}
        radius={50000}
        pathOptions={{
          color: "#ffa500",
          fillColor: "#ffa500",
          fillOpacity: 0.6
        }}
      />

      {/* CHENNAI */}
      <Circle
        center={[13.0827, 80.2707]}
        radius={50000}
        pathOptions={{
          color: "#00ff9d",
          fillColor: "#00ff9d",
          fillOpacity: 0.6
        }}
      />
    </>
  );
}

export default HeatmapLayer;