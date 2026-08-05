export default function Navbar() {
  return (
    <nav className="w-full border-b border-gray-800 bg-black">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <h1 className="text-xl font-bold text-blue-500">
          Base Arcade
        </h1>

        <button className="rounded-lg bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-500">
          Connect Wallet
        </button>
      </div>
    </nav>
  );
}