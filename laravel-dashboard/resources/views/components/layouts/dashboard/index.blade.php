<x-layouts.app :title="$title ?? 'Hazen Dashboard'">
    <div class="flex h-screen bg-slate-100 overflow-hidden w-full">
        <x-layouts.dashboard.sidebar />
        <div class="flex-1 flex flex-col overflow-y-auto">
            <x-layouts.dashboard.header />
            <main class="flex-1 p-6">
                {{ $slot }}
            </main>
        </div>
    </div>
</x-layouts.app>
