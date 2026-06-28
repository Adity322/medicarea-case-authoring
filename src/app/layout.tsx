import "./globals.css";
import { Sidebar } from "@/components/layout/sidebar";
import { TopNavbar } from "@/components/layout/top-navbar";
import { Toaster } from "sonner";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        
        <div className="flex h-screen bg-slate-50">
          <Sidebar />

          <main className="flex flex-1 flex-col">
            <TopNavbar />

            <div className="flex-1 overflow-auto p-8">
              {children}
            </div>
          </main>
        </div>
        <Toaster richColors />
      </body>
    </html>
  );
}