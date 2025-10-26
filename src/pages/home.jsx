import Bear from "../components/bear";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div
      className="flex flex-col items-center justify-start text-center min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('/pixil-frame-0_6.png')",
      }}
    >
      {/* 🧸 Animated Bear */}
      <div className="mt-4 mb-4 flex justify-center">
        <Bear />
      </div>

      {/* 🏷️ App Title */}
      <h1 className="text-[80px] font-extrabold text-white drop-shadow-[2px_2px_0_gray] tracking-small">
        Bearly Waste
      </h1>

      {/* 💬 Description */}
      <p className="text-2xl text-white -mt-6 mb-6 max-w-xs leading-relaxed drop-shadow-[2px_2px_0_gray]">
        Learn to recycle, earn XP, and keep your eco-bear happy!
      </p>

      {/* ♻️ Pixel-art "Start Recycling" button */}
      <Link to="/recycle" className="flex flex-col items-center">
        <img
          src="/pixil-frame-0_1.png"
          className="w-[200px] h-[200px] cursor-pointer hover:scale-120 transition-transform duration-300 bounce"
        />
      </Link>
    </div>
  );
}


