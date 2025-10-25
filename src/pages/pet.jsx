export default function Pet({ xp }) {
  let mood = "😐";
  if (xp >= 20) mood = "😊";
  if (xp >= 50) mood = "🤩";

  return (
    <div className="pt-10 flex flex-col items-center justify-center text-center h-full">
      <div className="text-6xl mb-2">{mood}</div>
      <h2 className="text-2xl font-bold text-emerald-700 mb-3">Your Pet</h2>
      <p className="text-gray-700 mb-4">XP: {xp}</p>

      <div className="flex justify-around gap-8 mt-4">
        <div className="flex flex-col items-center">
          <div className="text-4xl">🍩</div>
          <p className="text-sm mt-1">4 XP</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="text-4xl">🛏️</div>
          <p className="text-sm mt-1">2 XP</p>
        </div>
      </div>
    </div>
  );
}
