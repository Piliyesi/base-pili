export default function DiceDisplay() {
  return (
    <div className="rounded-3xl border border-blue-900 bg-zinc-900 p-8 text-center">

      <p className="mb-5 text-sm text-blue-400">
        Dice
      </p>

      <div className="mx-auto flex h-36 w-36 items-center justify-center rounded-3xl border-2 border-blue-700 bg-black text-6xl">
        🎲
      </div>

      <p className="mt-5 text-sm text-gray-500">
        Roll the dice to see your result.
      </p>

    </div>
  );
}