<x-layouts.app :title="$title ?? 'Hazen Auth'">
    <div class="min-h-screen flex items-center justify-center bg-slate-900 w-full p-4">
        <x-layouts.auth.auth-card>
            {{ $slot }}
        </x-layouts.auth.auth-card>
    </div>
</x-layouts.app>
