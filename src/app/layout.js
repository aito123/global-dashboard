import "./globals.css";
import Sidebar from "@/components/layout/Sidebar";

export const metadata = {
  title: "Global Dashboard · Data Science",
  description: "Interactive world development indicators — GDP, health, emissions",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex min-h-screen bg-ink text-snow">
        <Sidebar />
        <main className="flex-1 ml-0 md:ml-56 min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
