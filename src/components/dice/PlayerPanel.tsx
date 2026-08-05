export default function PlayerPanel() {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">

      <p className="mb-4 text-sm text-blue-400">
        Player
      </p>

      <div className="space-y-4">

        <div>
          <p className="text-xs text-gray-500">
            Wallet
          </p>

          <p className="font-medium text-white">
            Not Connected
          </p>
        </div>

        <div>
          <p className="text-xs text-gray-500">
            XP
          </p>

          <p className="font-medium text-white">
            0 XP
          </p>
        </div>

        <div>
          <p className="text-xs text-gray-500">
            Level
          </p>

          <p className="font-medium text-white">
            Level 1
          </p>
        </div>

      </div>

    </div>
  );
}