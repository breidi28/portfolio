import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { BackgroundPaths } from "@/components/ui/background-paths";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vlad Andrei Bradiceanu | Data & Business Analyst",
  description: "Applied Data & Business Analyst specializing in ML, BI, Dashboard development, and IT solutions. Proven track record in process optimization and digital transformation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <BackgroundPaths>
          {children}
        </BackgroundPaths>
      </body>
    </html>
  );
}
