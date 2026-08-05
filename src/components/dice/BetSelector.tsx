export default function BetSelector() {
  return (
    <div className="rounded-3xl border border-blue-900 bg-zinc-900 p-6">
      <p className="mb-4 text-sm text-blue-400">
        Select Bet
      </p>

      <div className="grid grid-cols-3 gap-3">

        <button className="rounded-lg border border-blue-800 bg-black py-3 text-white hover:border-blue-500">
          0.00002 ETH
        </button>

        <button className="rounded-lg border border-blue-800 bg-black py-3 text-white hover:border-blue-500">
          0.00005 ETH
        </button>

        <button className="rounded-lg border border-blue-800 bg-black py-3 text-white hover:border-blue-500">
          0.0001 ETH
        </button>

        <button className="rounded-lg border border-blue-800 bg-black py-3 text-white hover:border-blue-500">
          0.001 ETH
        </button>

        <button className="rounded-lg border border-blue-800 bg-black py-3 text-white hover:border-blue-500">
          0.01 ETH
        </button>

        <button className="rounded-lg border border-blue-800 bg-black py-3 text-white hover:border-blue-500">
          0.1 ETH
        </button>

      </div>

      <p className="mt-6 text-xs text-gray-500">
        Practice mode. A transaction signature will be required before rolling.
      </p>
    </div>
  );
}