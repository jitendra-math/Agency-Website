// src/app/dashboard/page.js

import Image from "next/image";

export default function DashboardPage() {
  return (
    <div className="w-full min-h-screen bg-[#020617] flex items-center justify-center">

      {/* Mobile Story Frame */}
      <div className="w-[270px] h-[480px] bg-[#020617] text-white p-3 flex flex-col justify-between border border-white/10 rounded-xl">

        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src="https://i.ibb.co/YBCwwxVx/8f30978833d12295fb16aa0b0d3bbb4d.jpg"
              alt="logo"
              width={18}
              height={18}
              className="rounded-full"
            />
            <p className="text-[10px] text-white/70">MatchPulse</p>
          </div>
          <p className="text-[9px] text-white/40">Updated 2m ago</p>
        </div>

        {/* Total Section */}
        <div className="mt-2">
          <p className="text-[10px] text-white/50">Total Performance</p>
          <h1 className="text-lg font-semibold">₹21,860</h1>
          <p className="text-emerald-400 text-[10px]">+9.8% last 10 days</p>
        </div>

        {/* History */}
        <div className="flex-1 mt-2 overflow-hidden">
          <p className="text-[10px] text-white/50 mb-1">Recent Matches</p>

          <div className="space-y-[6px] text-[10px] leading-tight">

            <Row match="RR vs MI" result="+₹2,300" win />
            <Row match="GT vs DC" result="+₹1,850" win />
            <Row match="KKR vs LSG" result="-₹700" />
            <Row match="RCB vs RR" result="+₹2,100" win />
            <Row match="SRH vs PBKS" result="+₹1,600" win />
            <Row match="CSK vs DC" result="+₹1,950" win />
            <Row match="LSG vs GT" result="-₹500" />
            <Row match="RCB vs MI" result="+₹2,400" win />
            <Row match="SRH vs RR" result="+₹1,300" win />
            <Row match="CSK vs KKR" result="+₹1,780" win />
            <Row match="LSG vs RCB" result="+₹1,250" win />
            <Row match="MI vs PBKS" result="+₹1,430" win />

          </div>
        </div>

        {/* Bottom Stats */}
        <div className="grid grid-cols-2 gap-1 mt-2 text-[10px]">

          <Stat label="Win Rate" value="83%" />
          <Stat label="Best Streak" value="6" />

          <div className="col-span-2 bg-white/5 p-2 rounded-md border border-white/10">
            <p className="text-white/50 text-[9px]">Today</p>
            <p className="text-emerald-400 font-medium">+₹1,280</p>
          </div>

        </div>

      </div>
    </div>
  );
}

function Row({ match, result, win }) {
  return (
    <div className="flex justify-between bg-white/5 px-2 py-[6px] rounded-md border border-white/10">
      <span className="text-white/70">{match}</span>
      <span className={win ? "text-emerald-400" : "text-red-400"}>
        {result}
      </span>
    </div>
  );
}

function Stat({ label, value }) {
  return (
    <div className="bg-white/5 p-2 rounded-md border border-white/10">
      <p className="text-white/50 text-[9px]">{label}</p>
      <p className="font-medium">{value}</p>
    </div>
  );
}