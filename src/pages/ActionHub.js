import React from "react";
import Header from "../components/Header";

function Progress({ title, value }) {
  return (
    <div style={{ marginBottom: 20 }}>
      <p>{title}</p>

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
            background: "#3b82f6",
            height: "100%",
            borderRadius: 6
          }}
        />
      </div>
    </div>
  );
}

function ActionHub() {
  return (
    <div className="page-container">
      <Header />

      <div className="content-container">
        <h2>Action & Collaboration Hub</h2>

        {/* KPI */}
        <div className="metric-grid">
          <div className="glass-card">12 Active Projects</div>
          <div className="glass-card">8 Completed</div>
          <div className="glass-card">49 Resources Needed</div>
        </div>

        {/* TRACKER */}
        <div className="glass-card">
          <h3>Project Tracker</h3>

          <Progress title="Mobile Health Unit" value={80} />
          <Progress title="Digital Literacy Camp" value={45} />
          <Progress title="Water System Upgrade" value={100} />
          <Progress title="Sanitation Infra" value={60} />
        </div>
      </div>
    </div>
  );
}

export default ActionHub;
