import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import HomeHeader from './components/headers/HomeHeader';

export const metadata: Metadata = {
  title: "Swap Space",
  description: "Built for those ready to explore the world.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body>
        {children}
      </body>
    </html>
  );
}
