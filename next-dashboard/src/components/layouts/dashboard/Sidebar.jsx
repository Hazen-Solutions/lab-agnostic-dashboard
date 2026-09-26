export function Sidebar() {
  return (
    <aside className="w-64 bg-slate-900 text-white p-6 hidden md:block">
      <h2 className="font-bold text-lg mb-6">Hazen Lab</h2>
      <nav className="space-y-2 text-sm text-slate-300">
        <a href="/dashboard" className="block py-2 px-3 bg-slate-800 rounded text-white font-medium">Dashboard</a>
      </nav>
    </aside>
  );
}
