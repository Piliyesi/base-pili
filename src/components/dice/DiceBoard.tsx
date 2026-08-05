import PlayerPanel from "./PlayerPanel";
import BetSelector from "./BetSelector";
import RollButton from "./RollButton";

export default function DiceBoard() {
  return (
    <section className="mx-auto mt-24 max-w-7xl px-6">

      <div className="rounded-3xl border border-blue-900 bg-zinc-950 p-10">

        <p className="mb-2 text-sm text-blue-400">
          Practice Mode
        </p>

        <h2 className="mb-4 text-4xl font-bold text-white">
          Base Dice
        </h2>

        <p className="mb-8 max-w-xl text-gray-400">
          Roll the dice, gain XP and build your onchain reputation inside Base Arcade.
        </p>

      </div>

      <div className="mt-8">
        <PlayerPanel />
      </div>

      <div className="mt-8">
        <BetSelector />
      </div>

      <div className="mt-8">
        <RollButton />
      </div>

    </section>
  );
}