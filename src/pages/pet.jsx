import Bear from "../components/bear";

export default function Pet({ xp }) {
  return (
    <div className="pt-10 flex flex-col items-center justify-center text-center h-full">
      {/* 🧸 Replace emoji bear with animation */}
      <div className="mb-6">
        <Bear />
      </div>

      <h2 className="text-[40px] font-bold text-white mb-3 drop-shadow-[2px_2px_0_black]">
        Your Pet
      </h2>
      <p className="text-xl text-white mb-6 drop-shadow-[2px_2px_0_black]">
        XP: {xp}
      </p>

      <div className="flex justify-around gap-8 mt-4">
        <div className="flex flex-col items-center">
          <div className="text-4xl">🍩</div>
          <p className="text-sm mt-1 text-white">4 XP</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="text-4xl">🛏️</div>
          <p className="text-sm mt-1 text-white">2 XP</p>
        </div>
      </div>
    </div>
  );
}
