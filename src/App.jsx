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
      {/* 🌄 Background wrapper */}
      <div
        className="min-h-screen flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: "url('/pixil-frame-0_6.png')",
        }}
      >
        {/* 📱 Phone shell */}
        <div className="relative w-[375px] h-[667px] bg-white rounded-[2rem] shadow-2xl overflow-hidden border border-emerald-200 flex flex-col">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/recycle" element={<Recycle onAddXP={addXP} />} />
            <Route path="/pet" element={<Pet xp={xp} setXP={setXP} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

