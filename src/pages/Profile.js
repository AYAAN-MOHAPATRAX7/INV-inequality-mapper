import React from "react";
import Header from "../components/Header";

import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer
} from "recharts";

const data = [
  { subject: "Healthcare", A: 40 },
  { subject: "Education", A: 65 },
  { subject: "Sanitation", A: 30 },
  { subject: "Digital", A: 25 },
  { subject: "Safety", A: 55 }
];

function Profile() {
  return (
    <div className="page-container">
      <Header />

      <div className="content-container">
        <h2>Village Profile: Rampur</h2>
        <p>East District • Last Updated Jan 2026</p>

        {/* RADAR + STATS GRID */}
        <div className="metric-grid">
          
          {/* RADAR */}
          <div className="glass-card" style={{ height: 300 }}>
            <h3>Development Indicators</h3>

            <ResponsiveContainer width="100%" height="100%">
              <RadarChart data={data}>
                <PolarGrid />
                <PolarAngleAxis dataKey="subject" />
                <PolarRadiusAxis />
                <Radar
                  name="Score"
                  dataKey="A"
                  stroke="#3b82f6"
                  fill="#3b82f6"
                  fillOpacity={0.6}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>

          {/* KPI CARDS */}
          <div className="glass-card">
            <h3>Key Stats</h3>
            <p>Population: 4,450</p>
            <p>Healthcare: 1 Clinic</p>
            <p>Water Access: 42%</p>
            <p>Internet: 18%</p>
            <p>Community Centers: 2</p>
          </div>
        </div>

        {/* GAPS */}
        <div className="glass-card">
          <h3>Key Gaps Identified</h3>
          <p>• Insufficient Healthcare Infrastructure</p>
          <p>• Limited Digital Connectivity</p>
          <p>• Poor Sanitation Coverage</p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
