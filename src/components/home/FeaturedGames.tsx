export default function FeaturedGames() {
  return (
    <section className="bg-black px-6 py-20">
      <div className="mx-auto max-w-7xl">

        <h2 className="mb-3 text-4xl font-bold text-white">
          Featured Games
        </h2>

        <p className="mb-12 text-gray-400">
          Start your journey on Base Arcade.
        </p>

        <div className="grid gap-6 md:grid-cols-3">

          <div className="rounded-2xl border border-gray-800 bg-zinc-900 p-6 transition hover:border-blue-500">
            <h3 className="mb-2 text-2xl font-bold text-white">
              🎲 Base Dice
            </h3>

            <p className="mb-6 text-gray-400">
              Roll the dice, earn XP and prepare for real mode.
            </p>

            <span className="rounded bg-blue-600 px-3 py-1 text-sm text-white">
              Coming Soon
            </span>
          </div>

          <div className="rounded-2xl border border-gray-800 bg-zinc-900 p-6 opacity-60">
            <h3 className="mb-2 text-2xl font-bold text-white">
              🎣 Base Fishing
            </h3>

            <p className="text-gray-400">
              Future Game
            </p>
          </div>

          <div className="rounded-2xl border border-gray-800 bg-zinc-900 p-6 opacity-60">
            <h3 className="mb-2 text-2xl font-bold text-white">
              ⛏ Base Miner
            </h3>

            <p className="text-gray-400">
              Future Game
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}