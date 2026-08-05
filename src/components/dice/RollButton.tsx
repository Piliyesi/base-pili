type RollButtonProps = {
  onRoll: () => void;
  isRolling: boolean;
};

export default function RollButton({
  onRoll,
  isRolling,
}: RollButtonProps) {
  return (
    <button
      type="button"
      onClick={onRoll}
      disabled={isRolling}
      className="w-full rounded-xl bg-blue-600 py-4 text-lg font-semibold text-white transition hover:bg-blue-500 disabled:cursor-not-allowed disabled:bg-blue-900 disabled:text-gray-400"
    >
      {isRolling ? "Rolling..." : "Roll Dice"}
    </button>
  );
}