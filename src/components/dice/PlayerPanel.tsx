type PlayerPanelProps = {
  xp: number;
  winStreak: number;
  rollHistory: number[];
};

export default function PlayerPanel({
  xp,
  winStreak,
  rollHistory,
}: PlayerPanelProps) {
  const level = Math.floor(xp / 100) + 1;
  const levelProgress = xp % 100;

  return (
    <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6">
      <p className="mb-5 text-sm text-blue-400">Player</p>

      <div className="space-y-5">
        <div>
          <p className="text-xs text-gray-500">Wallet</p>
          <p className="font-medium text-white">Not Connected</p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-xs text-gray-500">XP</p>
            <p className="font-medium text-white">{xp} XP</p>
          </div>

          <div>
            <p className="text-xs text-gray-500">Win Streak</p>
            <p className="font-medium text-white">
              {winStreak} 🔥
            </p>
          </div>
        </div>

        <div>
          <p className="text-xs text-gray-500">Level</p>
          <p className="font-medium text-white">
            Level {level}
          </p>
        </div>

        <div>
          <div className="mb-2 flex justify-between text-xs text-gray-500">
            <span>Level progress</span>
            <span>{levelProgress}/100 XP</span>
          </div>

          <div className="h-2 overflow-hidden rounded-full bg-black">
            <div
              className="h-full rounded-full bg-blue-600 transition-all duration-300"
              style={{ width: `${levelProgress}%` }}
            />
          </div>
        </div>

        <div className="mt-6 border-t border-zinc-800 pt-4">
          <p className="mb-2 text-xs text-gray-500">
            Last Rolls
          </p>

          <div className="flex flex-wrap gap-2">
            {rollHistory.map((roll, index) => (
              <div
                key={index}
                className={`flex h-9 w-9 items-center justify-center rounded-lg border text-sm font-bold ${
                  roll === 6
                    ? "border-green-500 text-green-400"
                    : "border-zinc-700 text-gray-300"
                }`}
              >
                {roll}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}