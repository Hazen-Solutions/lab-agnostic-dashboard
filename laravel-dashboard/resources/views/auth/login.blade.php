<x-layouts.auth title="Login Hazen">
    <div class="space-y-6">
        <div>
            <h2 class="text-2xl font-bold text-slate-900 text-center">Sign In</h2>
            <p class="text-sm text-slate-500 text-center mt-1">Masuk ke lab dashboard Anda (Laravel)</p>
        </div>
        <form class="space-y-4" action="#" method="POST">
            @csrf
            <div>
                <label class="block text-sm font-medium text-slate-700 mb-1">Email</label>
                <input type="email" class="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-900" placeholder="admin@hazen.test" />
            </div>
            <div>
                <label class="block text-sm font-medium text-slate-700 mb-1">Password</label>
                <input type="password" class="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-900" placeholder="••••••••" />
            </div>
            <button type="submit" class="w-full py-2 bg-slate-900 text-white rounded-md font-medium hover:bg-slate-800 transition">
                Login
            </button>
        </form>
    </div>
</x-layouts.auth>
