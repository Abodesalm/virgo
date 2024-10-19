"use client";

import { ThemeProvider } from "next-themes";
import {} from "next/font/local";

/* const roboto = Roboto({ subsets: ["latin"], weight: "400" });
 */
export default function Providers({ children }) {
  return (
    <ThemeProvider defaultTheme="system" attribute="class">
      <div className="text-dark dark:text-light bg-light dark:bg-dark transition-colors">
        {children}
      </div>
    </ThemeProvider>
  );
}
