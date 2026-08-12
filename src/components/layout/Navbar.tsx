export default function Navbar() {
  return (
    <nav className="sticky top-0 flex items-center justify-between py-6 backdrop-blur-md">
      <div>
        <h2 className="text-2xl font-bold text-teal-700">Nuriva</h2>

        <p className="text-sm text-gray-500">Care. Guide. Heal.</p>
      </div>

      <div className="flex gap-4">
        <button className="text-gray-600 hover:text-teal-700">Login</button>

        <button className="rounded-xl bg-teal-600 px-5 py-2 text-white hover:bg-teal-700">
          Register
        </button>
      </div>
    </nav>
  );
}
