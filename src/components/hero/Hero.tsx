export default function Hero() {
  return (
    <section className="flex min-h-[80vh] flex-col items-center justify-center bg-black px-6 text-center">
      <p className="mb-4 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-400">
        First game: Base Dice
      </p>

      <h1 className="mb-6 max-w-4xl text-5xl font-bold text-white">
        Play, earn XP and explore Base Arcade
      </h1>

      <p className="mb-8 max-w-2xl text-lg text-gray-400">
        Start with Base Dice practice mode, build your onchain activity and
        unlock new rewards across the arcade.
      </p>

      <button className="rounded-lg bg-blue-600 px-6 py-3 text-lg font-semibold text-white transition hover:bg-blue-500">
        Explore Base Dice
      </button>

      <p className="mt-4 text-sm text-gray-500">
        Practice mode first · Real-money mode planned for a later phase
      </p>
    </section>
  );
}