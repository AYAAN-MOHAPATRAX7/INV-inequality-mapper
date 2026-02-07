import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Comparison from "./pages/Comparison";
import ActionHub from "./pages/ActionHub";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/comparison" element={<Comparison />} />
        <Route path="/action-hub" element={<ActionHub />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;