import { Header } from "@/components/layouts/web/Header";
import { Footer } from "@/components/layouts/web/Footer";

export default function WebLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 flex flex-col">{children}</main>
      <Footer />
    </div>
  );
}
