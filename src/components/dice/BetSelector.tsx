"use client";

import { useState } from "react";

const bets = [
  "0.00002 ETH",
  "0.00005 ETH",
  "0.0001 ETH",
  "0.001 ETH",
  "0.01 ETH",
  "0.1 ETH",
];

export default function BetSelector() {
  const [selectedBet, setSelectedBet] = useState("0.00002 ETH");

  return (
    <div className="rounded-3xl border border-blue-900 bg-zinc-900 p-6">
      <p className="mb-5 text-sm text-blue-400">
        Select Bet
      </p>

      <div className="grid grid-cols-3 gap-3">
        {bets.map((bet) => (
          <button
            key={bet}
            onClick={() => setSelectedBet(bet)}
            className={`rounded-lg border py-3 transition ${
              selectedBet === bet
                ? "border-blue-500 bg-blue-600 text-white"
                : "border-blue-800 bg-black text-white hover:border-blue-500"
            }`}
          >
            {bet}
          </button>
        ))}
      </div>

      <p className="mt-5 text-xs text-gray-500">
        Selected: {selectedBet}
      </p>

      <p className="mt-2 text-xs text-gray-500">
        Practice mode. A transaction signature will be required before rolling.
      </p>
    </div>
  );
}