import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";

// --- Home Page ---
function Home() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center p-4 text-center">
      <p className="text-gray-600 mb-5 max-w-[250px]">
        Learn to recycle, earn XP, and keep your eco-bear happy 🌱
      </p>
      <Link
        to="/recycle"
        className="px-6 py-3 bg-emerald-600 text-white rounded-xl shadow hover:bg-emerald-700 transition"
      >
        Start Recycling
      </Link>
    </div>
  );
}

// --- Recycle Page ---
function Recycle({ onAddXP }) {
  const [item, setItem] = useState("");
  const [message, setMessage] = useState("");

  function handleDetect() {
    const recyclable = ["bottle", "can", "cardboard"];
    const compostable = ["banana", "apple", "food"];
    const lower = item.toLowerCase();

    if (recyclable.some((w) => lower.includes(w))) {
      setMessage("♻️ Recyclable! +5 XP");
      onAddXP(5);
    } else if (compostable.some((w) => lower.includes(w))) {
      setMessage("🌱 Compostable! +3 XP");
      onAddXP(3);
    } else {
      setMessage("🗑️ Trash or unknown item.");
    }
  }

  return (
    <div className="flex-1 flex flex-col items-center justify-center p-4 text-center">
      <h2 className="text-2xl font-bold text-emerald-700 mb-3">Start Recycling</h2>
      <input
        className="border border-emerald-400 rounded-xl px-3 py-2 mb-3 w-64"
        placeholder="Type an item (e.g. bottle)"
        value={item}
        onChange={(e) => setItem(e.target.value)}
      />
      <button
        onClick={handleDetect}
        className="px-5 py-2 bg-emerald-600 text-white rounded-xl shadow hover:bg-emerald-700"
      >
        Detect
      </button>
      {message && <p className="mt-4 text-lg">{message}</p>}
    </div>
  );
}

// --- Pet Page ---
function Pet({ xp }) {
  let mood = "😐";
  if (xp >= 20) mood = "😊";
  if (xp >= 50) mood = "🤩";

  return (
    <div className="flex-1 flex flex-col items-center justify-center p-4 text-center">
      <h2 className="text-2xl font-bold text-emerald-700 mb-3">Your Pet</h2>
      <div className="text-6xl mb-2">{mood}</div>
      <p className="text-gray-700 mb-4">XP: {xp}</p>
      <p className="text-sm text-gray-500 max-w-[250px]">
        The more you recycle, the happier your eco-bear becomes 💚
      </p>
    </div>
  );
}

// --- Main App ---
export default function App() {
  const [xp, setXP] = useState(0);

  function addXP(points) {
    setXP((prev) => prev + points);
  }

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-emerald-100 to-emerald-50 flex items-center justify-center">
        {/* Phone Shell */}
        <div className="relative w-[375px] h-[667px] bg-white rounded-[2rem] shadow-2xl overflow-hidden border border-emerald-200 flex flex-col">
          {/* Header */}
          <div className="bg-emerald-600 text-white text-center py-3 font-bold text-lg">
            Bearly Waste
          </div>

          {/* Body / Routes */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/recycle" element={<Recycle onAddXP={addXP} />} />
            <Route path="/pet" element={<Pet xp={xp} />} />
          </Routes>

          {/* Footer Navigation */}
          <div className="bg-emerald-100 text-gray-600 text-sm py-2 flex justify-around border-t border-emerald-200">
            <Link to="/" className="hover:text-emerald-700">
              Home
            </Link>
            <Link to="/recycle" className="hover:text-emerald-700">
              Recycle
            </Link>
            <Link to="/pet" className="hover:text-emerald-700">
              Pet
            </Link>
          </div>
        </div>
      </div>
    </Router>
  );
}
