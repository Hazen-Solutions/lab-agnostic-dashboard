'use client';

export default function LoginPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-slate-900 text-center">Sign In</h2>
        <p className="text-sm text-slate-500 text-center mt-1">Masuk ke lab dashboard Anda (Next.js)</p>
      </div>
      <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
          <input type="email" className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-900" placeholder="admin@hazen.test" />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Password</label>
          <input type="password" className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-900" placeholder="••••••••" />
        </div>
        <button type="submit" className="w-full py-2 bg-slate-900 text-white rounded-md font-medium hover:bg-slate-800 transition">
          Login
        </button>
      </form>
    </div>
  );
}
