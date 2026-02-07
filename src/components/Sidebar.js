import React from "react";

function Sidebar() {
  return (
    <div
      style={{
        width: "260px",
        padding: "20px",
        background: "rgba(15,23,42,0.7)",
        backdropFilter: "blur(18px)",
        borderRight: "1px solid rgba(255,255,255,0.08)",
        color: "white",
        minHeight: "100vh"
      }}
    >
      {/* PRIORITY */}
      <h4 style={{ marginBottom: "12px" }}>Priority Level</h4>

      {[
        "Critical",
        "High",
        "Moderate",
        "Low"
      ].map((item) => (
        <label
          key={item}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            marginBottom: "10px",
            cursor: "pointer"
          }}
        >
          <input
            type="checkbox"
            defaultChecked
            style={{
              accentColor: "#4da3ff",
              transform: "scale(1.1)",
              boxShadow: "0 0 6px #4da3ff"
            }}
          />
          {item}
        </label>
      ))}

      <hr
        style={{
          borderColor: "rgba(255,255,255,0.08)",
          margin: "20px 0"
        }}
      />

      {/* INDICATORS */}
      <h4 style={{ marginBottom: "12px" }}>
        Development Indicators
      </h4>

      {[
        "Healthcare",
        "Education",
        "Sanitation & Water",
        "Digital Access",
        "Community Safety"
      ].map((item) => (
        <label
          key={item}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            marginBottom: "10px",
            cursor: "pointer"
          }}
        >
          <input
            type="checkbox"
            defaultChecked
            style={{
              accentColor: "#22c55e",
              transform: "scale(1.1)",
              boxShadow: "0 0 6px #22c55e"
            }}
          />
          {item}
        </label>
      ))}

      <hr
        style={{
          borderColor: "rgba(255,255,255,0.08)",
          margin: "20px 0"
        }}
      />

      {/* LEGEND */}
      <h4>Inequality Index</h4>

      <p style={{ color: "#ef4444" }}>⬤ High (70–100)</p>
      <p style={{ color: "#f59e0b" }}>⬤ Medium (40–69)</p>
      <p style={{ color: "#22c55e" }}>⬤ Low (0–39)</p>
    </div>
  );
}

export default Sidebar;