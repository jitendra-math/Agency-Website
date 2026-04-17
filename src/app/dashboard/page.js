// src/app/dashboard/page.js

export default function DashboardPage() {
  return (
    <div className="w-full min-h-screen bg-[#020617] flex items-center justify-center px-3">

      {/* Story Container */}
      <div className="w-[270px] h-[480px] bg-[#020617] rounded-2xl p-4 flex flex-col justify-between shadow-2xl border border-white/10">

        {/* Header */}
        <div>
          <p className="text-[10px] text-white/50">MatchPulse • Live</p>
          <h1 className="text-white text-lg font-semibold mt-1">Performance Dashboard</h1>

          <div className="mt-3 bg-white/5 rounded-xl p-3 border border-white/10">
            <p className="text-[10px] text-white/50">Total Growth</p>
            <h2 className="text-white text-xl font-bold">₹18,450</h2>
            <p className="text-emerald-400 text-xs mt-1">+12.4% This Month</p>
          </div>
        </div>

        {/* Recent Matches */}
        <div className="flex-1 mt-3">
          <p className="text-[10px] text-white/50 mb-2">Recent Performance</p>

          <div className="space-y-2 text-xs">

            <div className="flex justify-between bg-white/5 p-2 rounded-lg border border-white/10">
              <span className="text-white/70">MI vs CSK</span>
              <span className="text-emerald-400">+₹2,400</span>
            </div>

            <div className="flex justify-between bg-white/5 p-2 rounded-lg border border-white/10">
              <span className="text-white/70">RCB vs KKR</span>
              <span className="text-emerald-400">+₹3,100</span>
            </div>

            <div className="flex justify-between bg-white/5 p-2 rounded-lg border border-white/10">
              <span className="text-white/70">RR vs GT</span>
              <span className="text-red-400">-₹900</span>
            </div>

            <div className="flex justify-between bg-white/5 p-2 rounded-lg border border-white/10">
              <span className="text-white/70">SRH vs LSG</span>
              <span className="text-emerald-400">+₹1,750</span>
            </div>

            <div className="flex justify-between bg-white/5 p-2 rounded-lg border border-white/10">
              <span className="text-white/70">DC vs PBKS</span>
              <span className="text-emerald-400">+₹2,050</span>
            </div>

          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-3 grid grid-cols-2 gap-2">

          <div className="bg-white/5 p-2 rounded-lg border border-white/10">
            <p className="text-[10px] text-white/50">Win Rate</p>
            <p className="text-white text-sm font-semibold">78%</p>
          </div>

          <div className="bg-white/5 p-2 rounded-lg border border-white/10">
            <p className="text-[10px] text-white/50">Best Streak</p>
            <p className="text-white text-sm font-semibold">5</p>
          </div>

          <div className="bg-white/5 p-2 rounded-lg border border-white/10 col-span-2">
            <p className="text-[10px] text-white/50">Today’s Net</p>
            <p className="text-emerald-400 text-sm font-semibold">+₹1,120</p>
          </div>

        </div>

      </div>
    </div>
  );
}