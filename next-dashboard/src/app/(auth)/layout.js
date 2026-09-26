import { AuthCard } from "@/components/layouts/auth/AuthCard";

export default function AuthLayout({ children }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900 w-full p-4">
      <AuthCard>{children}</AuthCard>
    </div>
  );
}
