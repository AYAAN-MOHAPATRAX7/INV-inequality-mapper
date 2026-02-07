import React from "react";

function InfoPanel() {
  return (
    <div
      style={{
        width: "260px",
        background: "rgba(255,255,255,0.05)",
        backdropFilter: "blur(12px)",
        padding: "20px",
        borderRadius: "16px",
        border: "1px solid rgba(255,255,255,0.1)"
      }}
    >
      <h4>Region Selected</h4>
      <h2>East District</h2>

      <h1>78 / 100</h1>
      <p>Inequality Index</p>

      <hr />

      <p>Population: 45,230</p>
      <p>Wards Analyzed: 12</p>
      <p>Critical Gaps: 8</p>
    </div>
  );
}

export default InfoPanel;
