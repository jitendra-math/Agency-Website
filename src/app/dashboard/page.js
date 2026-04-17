// src/app/dashboard/page.js

const matches = [
  {
    matchNo: 13,
    date: "2026-04-07",
    team1: "Rajasthan Royals",
    team2: "Mumbai Indians",
    winner: "Rajasthan Royals",
    result: "Rajasthan Royals won by 27 runs",
    score1: "150/3",
    score2: "123/9",
  },
  {
    matchNo: 14,
    date: "2026-04-08",
    team1: "Gujarat Titans",
    team2: "Delhi Capitals",
    winner: "Gujarat Titans",
    result: "Gujarat Titans won by 1 run",
    score1: "210/4",
    score2: "209/8",
  },
  {
    matchNo: 15,
    date: "2026-04-09",
    team1: "Kolkata Knight Riders",
    team2: "Lucknow Super Giants",
    winner: "Lucknow Super Giants",
    result: "Lucknow Super Giants won by 3 wickets",
    score1: "181/4",
    score2: "182/7",
  },
  {
    matchNo: 16,
    date: "2026-04-10",
    team1: "Royal Challengers Bengaluru",
    team2: "Rajasthan Royals",
    winner: "Rajasthan Royals",
    result: "Rajasthan Royals won by 6 wickets",
    score1: "201/8",
    score2: "202/4",
  },
  {
    matchNo: 17,
    date: "2026-04-11",
    team1: "Sunrisers Hyderabad",
    team2: "Punjab Kings",
    winner: "Punjab Kings",
    result: "Punjab Kings won by 6 wickets",
    score1: "219/6",
    score2: "223/4",
  },
  {
    matchNo: 18,
    date: "2026-04-11",
    team1: "Chennai Super Kings",
    team2: "Delhi Capitals",
    winner: "Chennai Super Kings",
    result: "Chennai Super Kings won by 23 runs",
    score1: "212/2",
    score2: "189/10",
  },
  {
    matchNo: 19,
    date: "2026-04-12",
    team1: "Lucknow Super Giants",
    team2: "Gujarat Titans",
    winner: "Gujarat Titans",
    result: "Gujarat Titans won by 7 wickets",
    score1: "164/8",
    score2: "165/3",
  },
  {
    matchNo: 20,
    date: "2026-04-12",
    team1: "Royal Challengers Bengaluru",
    team2: "Mumbai Indians",
    winner: "Royal Challengers Bengaluru",
    result: "Royal Challengers Bengaluru won by 18 runs",
    score1: "240/4",
    score2: "222/5",
  },
  {
    matchNo: 21,
    date: "2026-04-13",
    team1: "Sunrisers Hyderabad",
    team2: "Rajasthan Royals",
    winner: "Sunrisers Hyderabad",
    result: "Sunrisers Hyderabad won by 57 runs",
    score1: "216/6",
    score2: "159/10",
  },
  {
    matchNo: 22,
    date: "2026-04-14",
    team1: "Chennai Super Kings",
    team2: "Kolkata Knight Riders",
    winner: "Chennai Super Kings",
    result: "Chennai Super Kings won by 32 runs",
    score1: "192/5",
    score2: "160/7",
  },
  {
    matchNo: 23,
    date: "2026-04-15",
    team1: "Lucknow Super Giants",
    team2: "Royal Challengers Bengaluru",
    winner: "Royal Challengers Bengaluru",
    result: "Royal Challengers Bengaluru won by 5 wickets",
    score1: "146/10",
    score2: "149/5",
  },
  {
    matchNo: 24,
    date: "2026-04-16",
    team1: "Mumbai Indians",
    team2: "Punjab Kings",
    winner: "Punjab Kings",
    result: "Punjab Kings won by 7 wickets",
    score1: "195/6",
    score2: "198/3",
  },
];

function shortName(team) {
  const map = {
    "Rajasthan Royals": "RR",
    "Mumbai Indians": "MI",
    "Gujarat Titans": "GT",
    "Delhi Capitals": "DC",
    "Kolkata Knight Riders": "KKR",
    "Lucknow Super Giants": "LSG",
    "Royal Challengers Bengaluru": "RCB",
    "Sunrisers Hyderabad": "SRH",
    "Punjab Kings": "PBKS",
    "Chennai Super Kings": "CSK",
  };

  return map[team] || team;
}

function formatDate(dateString) {
  const date = new Date(`${dateString}T00:00:00`);
  return date.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
  });
}

export default function DashboardPage() {
  const reversed = [...matches].reverse();

  const teamWins = matches.reduce((acc, match) => {
    acc[match.winner] = (acc[match.winner] || 0) + 1;
    return acc;
  }, {});

  const topTeams = Object.entries(teamWins)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5);

  const biggestWin = matches.find((m) => m.result.includes("57 runs"));
  const closestFinish = matches.find((m) => m.result.includes("1 run"));

  return (
    <div className="min-h-screen bg-[#020617] text-white flex items-center justify-center p-3 sm:p-4">
      <div className="relative w-full max-w-[390px] h-[92vh] max-h-[780px] overflow-hidden rounded-[32px] border border-white/10 bg-[#07111f] shadow-[0_24px_80px_rgba(0,0,0,0.45)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.18),transparent_36%),radial-gradient(circle_at_bottom_right,rgba(245,158,11,0.12),transparent_28%),linear-gradient(180deg,#07111f_0%,#030712_100%)]" />
        <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(rgba(255,255,255,0.7)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.7)_1px,transparent_1px)] bg-[size:18px_18px]" />
        <div className="absolute -top-20 -right-20 h-56 w-56 rounded-full bg-emerald-400/10 blur-3xl" />
        <div className="absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-amber-400/10 blur-3xl" />

        <div className="relative z-10 flex h-full flex-col p-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 overflow-hidden rounded-full border border-white/15 bg-white/10">
                <img
                  src="https://i.ibb.co/YBCwwxVx/8f30978833d12295fb16aa0b0d3bbb4d.jpg"
                  alt="App logo"
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-wider text-white/45">
                  MatchPulse
                </p>
                <p className="text-[11px] text-white/75">IPL 2026 Results</p>
              </div>
            </div>

            <div className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] text-white/70">
              As of 17 Apr 2026
            </div>
          </div>

          <div className="mt-3 rounded-3xl border border-white/10 bg-white/6 p-3 backdrop-blur-xl">
            <div className="flex items-end justify-between gap-3">
              <div>
                <p className="text-[10px] text-white/45">Season Snapshot</p>
                <h1 className="mt-1 text-[19px] font-semibold leading-none">
                  Performance Dashboard
                </h1>
              </div>
              <div className="text-right">
                <p className="text-[10px] text-white/45">Completed</p>
                <p className="text-lg font-semibold">{matches.length}</p>
              </div>
            </div>

            <div className="mt-3 grid grid-cols-3 gap-2">
              <div className="rounded-2xl border border-white/10 bg-black/20 p-2">
                <p className="text-[9px] text-white/45">Biggest win</p>
                <p className="mt-1 text-xs font-semibold text-emerald-400">
                  {biggestWin ? "57 runs" : "N/A"}
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/20 p-2">
                <p className="text-[9px] text-white/45">Closest finish</p>
                <p className="mt-1 text-xs font-semibold text-amber-300">
                  {closestFinish ? "1 run" : "N/A"}
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/20 p-2">
                <p className="text-[9px] text-white/45">Top form</p>
                <p className="mt-1 text-xs font-semibold text-white">5 teams</p>
              </div>
            </div>

            <div className="mt-3 flex flex-wrap gap-1.5">
              {topTeams.map(([team, wins]) => (
                <span
                  key={team}
                  className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] text-white/75"
                >
                  {shortName(team)} · {wins}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-3 flex items-center justify-between">
            <p className="text-[10px] uppercase tracking-wider text-white/45">
              Recent results
            </p>
            <p className="text-[10px] text-white/40">Winner • Margin • Score</p>
          </div>

          <div className="mt-2 grid grid-cols-2 gap-2 overflow-hidden">
            {reversed.map((match) => (
              <div
                key={match.matchNo}
                className="rounded-2xl border border-white/10 bg-white/5 p-2.5 backdrop-blur-sm"
              >
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <p className="text-[9px] text-white/40">
                      Match {match.matchNo} · {formatDate(match.date)}
                    </p>
                    <p className="mt-1 text-[10px] font-medium text-white/85 leading-tight">
                      {shortName(match.team1)} vs {shortName(match.team2)}
                    </p>
                  </div>
                  <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-2 py-0.5 text-[9px] font-medium text-emerald-300">
                    {shortName(match.winner)}
                  </span>
                </div>

                <p className="mt-2 text-[10px] leading-tight text-white/70">
                  {match.result}
                </p>

                <div className="mt-2 flex items-center justify-between text-[9px] text-white/40">
                  <span>
                    {shortName(match.team1)} {match.score1}
                  </span>
                  <span>
                    {shortName(match.team2)} {match.score2}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-auto pt-3">
            <div className="rounded-2xl border border-white/10 bg-black/20 px-3 py-2">
              <div className="flex items-center justify-between text-[10px]">
                <span className="text-white/45">Status</span>
                <span className="text-white/70">Completed matches only</span>
              </div>
              <p className="mt-1 text-[11px] text-white/55">
                Clean match result view with real winners, margins, and scorelines.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}