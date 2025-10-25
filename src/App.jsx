import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import Recycle from "./pages/recycle";
import Pet from "./pages/pet";
import { useState } from "react";

export default function App() {
  const [xp, setXP] = useState(0);
  const addXP = (points) => setXP((x) => x + points);

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-emerald-100 to-emerald-50 flex items-center justify-center">
        {/* Phone Shell */}
        <div className="relative w-[375px] h-[667px] bg-white rounded-[2rem] shadow-2xl overflow-hidden border border-emerald-200 flex flex-col">
          {/* Navbar is part of shell */}
          <Navbar />

          {/* Route Pages */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/recycle" element={<Recycle onAddXP={addXP} />} />
            <Route path="/pet" element={<Pet xp={xp} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
