"use client";

import { useState } from "react";
import PlayerPanel from "./PlayerPanel";
import BetSelector from "./BetSelector";
import RollButton from "./RollButton";
import DiceDisplay from "./DiceDisplay";

export default function DiceBoard() {
  const [face, setFace] = useState("🎲");
  const [isRolling, setIsRolling] = useState(false);
  const [rollValue, setRollValue] = useState<number | null>(null);
  const [didWin, setDidWin] = useState<boolean | null>(null);
  const [xp, setXp] = useState(0);
  const [winStreak, setWinStreak] = useState(0);

  function handleRoll() {
    setIsRolling(true);

    setTimeout(() => {
      const dice = [
        { value: 1, face: "⚀" },
        { value: 2, face: "⚁" },
        { value: 3, face: "⚂" },
        { value: 4, face: "⚃" },
        { value: 5, face: "⚄" },
        { value: 6, face: "⚅" },
      ];

      const randomDice =
        dice[Math.floor(Math.random() * dice.length)];

      setFace(randomDice.face);
      setRollValue(randomDice.value);
      setDidWin(randomDice.value === 6);

      if (randomDice.value === 6) {
        setXp((currentXp) => currentXp + 10);
        setWinStreak((currentStreak) => currentStreak + 1);
      } else {
        setWinStreak(0);
      }

      setIsRolling(false);
    }, 1000);
  }

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
        <PlayerPanel
          xp={xp}
          winStreak={winStreak}
        />
      </div>

      <div className="mt-8">
        <BetSelector />
      </div>

      <div className="mt-8">
        <RollButton
          onRoll={handleRoll}
          isRolling={isRolling}
        />
      </div>

      <div className="mt-8">
        <DiceDisplay
          face={face}
          isRolling={isRolling}
          rollValue={rollValue}
          didWin={didWin}
        />
      </div>

    </section>
  );
}