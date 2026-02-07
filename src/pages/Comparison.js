import React from "react";
import Header from "../components/Header";

function Bar({ label, value, color }) {
  return (
    <div style={{ marginBottom: 15 }}>
      <p>{label}</p>

      <div
        style={{
          background: "#1f2937",
          height: 10,
          borderRadius: 6
        }}
      >
        <div
          style={{
            width: `${value}%`,
            background: color,
            height: "100%",
            borderRadius: 6
          }}
        />
      </div>
    </div>
  );
}

function Comparison() {
  return (
    <div className="page-container">
      <Header />

      <div className="content-container">
        <h2>Inequality Comparison</h2>

        <div className="glass-card">
          <h3>Tech Park District</h3>

          <Bar label="Healthcare" value={92} color="#22c55e" />
          <Bar label="Education" value={88} color="#22c55e" />
          <Bar label="Sanitation" value={85} color="#22c55e" />
          <Bar label="Digital" value={95} color="#22c55e" />
        </div>

        <div className="glass-card">
          <h3>Rampur Ward</h3>

          <Bar label="Healthcare" value={35} color="#ef4444" />
          <Bar label="Education" value={52} color="#f59e0b" />
          <Bar label="Sanitation" value={33} color="#ef4444" />
          <Bar label="Digital" value={20} color="#ef4444" />
        </div>
      </div>
    </div>
  );
}

export default Comparison;
