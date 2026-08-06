type DiceDisplayProps = {
  face: string;
  isRolling: boolean;
  rollValue: number | null;
};

export default function DiceDisplay({
  face,
  isRolling,
  rollValue,
}: DiceDisplayProps) {
  return (
    <div className="rounded-3xl border border-blue-900 bg-zinc-900 p-8 text-center">
      <p className="mb-5 text-sm text-blue-400">
        Dice
      </p>

      <div
        className={`mx-auto flex h-36 w-36 items-center justify-center rounded-3xl border-2 border-blue-700 bg-black text-6xl transition-transform duration-200 ${
          isRolling ? "rotate-180 scale-110" : "rotate-0 scale-100"
        }`}
      >
        {face}
      </div>

      <p className="mt-5 text-lg font-semibold text-white">
         {rollValue === null ? "Result: -" : `Result: ${rollValue}`}
      </p>

      <p className="mt-5 text-sm text-gray-500">
        {isRolling ? "Rolling..." : "Roll the dice to see your result."}
      </p>
    </div>
  );
}