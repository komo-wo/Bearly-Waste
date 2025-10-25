export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-100 to-emerald-50 flex items-center justify-center">
      {/* Phone Shell */ }
      <div className="relative w-[375px] h-[667px] bg-white rounded-[2rem] shadow-2xl overflow-hidden border border-emerald-200 flex flex-col">
        {/ App Header /}
        <div className="bg-emerald-600 text-white text-center py-3 font-bold text-lg">
        Bearly Waste
        </div>

        {/* App Body */}
        <div className="flex-1 flex flex-col items-center justify-center p-4 text-center">
          <h1 className="text-2xl font-bold text-emerald-700 mb-3">
          </h1>
          <p className="text-gray-600 mb-5 max-w-[250px]">
            Learn to recycle, earn XP, and keep your eco-bear happy 🌱
          </p>
          <button className="px-6 py-3 bg-emerald-600 text-white rounded-xl shadow hover:bg-emerald-700 transition">
            Start Recycling
          </button>
        </div>

        {/* App Footer */}
        <div className="bg-emerald-100 text-gray-500 text-xs py-2 text-center">
          © 2025 Bearly Waste
        </div>
      </div>
    </div>
  );
}