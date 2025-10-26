
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div
      className="flex flex-col items-center justify-start text-center min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('/pixil-frame-0_6.png')",
      }}
    >

      {/* 🏷️ App Title */}
      <h1 className="text-[80px] font-extrabold text-white drop-shadow-[2px_2px_0_gray] tracking-small">
        Bearly Waste
      </h1>


      {/* 🐻‍❄️ Polar Bear Image */}
      <img
        src="/polarbear2.png"
        alt="Polar Bear"
        className="w-[180px] h-auto mt-[-50px] mb-4"
      />

      {/* 💬 Description */}
      <p className="text-2xl text-white -mt-[-35px] mb-6 max-w-xs leading-relaxed drop-shadow-[2px_2px_0_gray]">
        Learn to recycle, earn XP, and keep your eco-bear happy!
      </p>

      {/* ♻️ Pixel-art "Start Recycling" button */}
      <Link to="/recycle" className="flex flex-col items-center">
        <img
          src="/pixil-frame-0_1.png"
          className="mt-[0px] w-[80px] h-[80px] cursor-pointer hover:scale-120 transition-transform duration-300 bounce"
        />
      </Link>
    </div>
  );
}


