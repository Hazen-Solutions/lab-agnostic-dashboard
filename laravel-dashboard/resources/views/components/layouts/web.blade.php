<x-layouts.app :title="$title ?? 'Hazen Web'">
    <div class="flex flex-col min-h-screen">
        <x-layouts.web.header />
        <main class="flex-1 flex flex-col">
            {{ $slot }}
        </main>
        <x-layouts.web.footer />
    </div>
</x-layouts.app>
