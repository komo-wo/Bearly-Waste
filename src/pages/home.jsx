import Bear from "../components/bear";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center text-center min-h-screen bg-emerald-50">
      {/* 🧸 Animated Bear */}
      <div className="mt-10 mb-6">
        <Bear />
      </div>

      {/* 🏷️ App Title */}
      <h1 className="text-9x1 font-extrabold text-emerald-700 mb-3 tracking-wide">
        Bearly Waste
      </h1>

      {/* 💬 Description */}
      <p className="text-gray-700 mb-10 max-w-xs leading-relaxed">
        Learn to recycle, earn XP, and keep your eco-bear happy 🌱
      </p>

      {/* ♻️ Pixel-art "Start Recycling" button */}
      <Link to="/recycle" className="flex flex-col items-center">
        <img
          src="/pixil-frame-0_1.png"
          className="w-56 h-56 cursor-pointer hover:scale-110 transition-transform duration-300 bounce"
        />
        <p className="text-lg font-semibold text-emerald-700 mt-4">
          Start Recycling
        </p>
      </Link>
    </div>
  );
}


