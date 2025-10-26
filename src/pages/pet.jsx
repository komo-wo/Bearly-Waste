import { useState } from "react";
import PetStatus from "../components/petstatus";

export default function Pet({ xp, setXP }) {
  const [message, setMessage] = useState("");
  const [happiness, setHappiness] = useState(0); // 🧊 starts off SAD (0)

  // 🐟 Feeding logic
  const handleFeed = (cost, snackName, moodBoost) => {
    if (xp < cost) {
      setMessage(`Not enough XP to buy ${snackName}!`);
      return;
    }

    // Subtract XP and increase happiness
    setXP((prev) => Math.max(prev - cost, 0));
    setHappiness((prev) => Math.min(prev + moodBoost, 9)); // cap happiness at 9
  };

  return (
    <div
      className="flex flex-col items-center justify-start text-center min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('/pixil-frame-0_6.png')",
      }}
    >
      {/* 🧸 Title */}
      <h2 className="text-[40px] font-bold text-white mb-3">
        Binnie the Polar Bear
      </h2>

      {/* 🧊 Pet Mood (Sad → Okay → Happy) */}
      <div className="mt-[60px]">
        <PetStatus happiness={happiness} />
      </div>

      {/* XP Display */}
      <p className="text-[30px] text-white mt-[20px] mb-4">XP: {xp}</p>

      {/* Feedback Message */}
      {message && (
        <p className="text-lg text-yellow-300 mb-4 drop-shadow-[1px_1px_0_black]">
          {message}
        </p>
      )}

      {/* 🍣 & 🍧 Snacks */}
      <div className="flex justify-center mt-4 gap-x-16">
        {/* Salmon */}
        <div className="flex flex-col items-center">
          <img
            src="/pixil-frame-0_4.png"
            alt="Salmon"
            onClick={() => handleFeed(4, "salmon", 3)} // +3 happiness
            className={`mt-[-40px] w-[90px] h-[90px] transition-transform duration-300 ${
              xp >= 4
                ? "cursor-pointer hover:scale-110 bounce"
                : "opacity-50 cursor-not-allowed"
            }`}
          />
          <p className="text-[15px] mt-[1px] text-white">Salmon - 4 XP</p>
        </div>

        {/* Shaved Ice */}
        <div className="flex flex-col items-center">
          <img
            src="/pixil-frame-0_5.png"
            alt="Shaved Ice"
            onClick={() => handleFeed(2, "shaved ice", 2)} // +2 happiness
            className={`mt-[-40px] w-[90px] h-[90px] transition-transform duration-300 ${
              xp >= 2
                ? "cursor-pointer hover:scale-110 bounce"
                : "opacity-50 cursor-not-allowed"
            }`}
          />
          <p className="text-[15px] mt-[1px] text-white">Shaved Ice - 2 XP</p>
        </div>
      </div>
    </div>
  );
}
