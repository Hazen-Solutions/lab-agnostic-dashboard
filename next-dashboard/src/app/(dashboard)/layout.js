import { Sidebar } from "@/components/layouts/dashboard/Sidebar";
import { Header } from "@/components/layouts/dashboard/Header";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex h-screen bg-slate-100 overflow-hidden w-full">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-y-auto">
        <Header />
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
}
