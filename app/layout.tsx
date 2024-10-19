import type { Metadata } from "next";
import "../public/css/globals.css";
import Navbar from "@/sections/Navbar";
import ToUp from "@/components/ToUp";
import Providers from "./Providers";
import Sidebar from "@/sections/Sidebar";

export const metadata: Metadata = {
  title: "",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Navbar />
          <div className="flex flex-row">
            <Sidebar />
            <div className="w-[86%] side-pad">{children}</div>
          </div>
          <ToUp />
        </Providers>
      </body>
    </html>
  );
}
