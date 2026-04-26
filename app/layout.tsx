import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://vladbradiceanu.vercel.app"),
  title: "Vlad Andrei Bradiceanu | Data and AI Engineer",
  description: "Data and AI Engineer delivering measurable operational impact: 50% downtime reduction and EUR100K+ annual savings. Strong in Python, SQL, BI, machine learning, and production software delivery.",
  keywords: [
    "Vlad Bradiceanu",
    "Data Engineer",
    "Data Analyst",
    "AI Engineer",
    "Machine Learning",
    "Python",
    "Business Intelligence",
    "Portfolio",
  ],
  openGraph: {
    title: "Vlad Andrei Bradiceanu | Data and AI Engineer",
    description:
      "Data and AI Engineer delivering measurable operational impact: 50% downtime reduction and EUR100K+ annual savings.",
    url: "https://vladbradiceanu.vercel.app",
    siteName: "Vlad Bradiceanu Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vlad Andrei Bradiceanu | Data and AI Engineer",
    description:
      "Data and AI Engineer focused on measurable operational impact, analytics, and production software delivery.",
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Vlad Andrei Bradiceanu",
  url: "https://vladbradiceanu.vercel.app",
  jobTitle: "Data and AI Engineer",
  email: "mailto:vladbradiceanuandrei@gmail.com",
  telephone: "+40733193397",
  sameAs: [
    "https://linkedin.com/in/vladbradiceanu",
    "https://github.com/breidi28",
  ],
  worksFor: {
    "@type": "Organization",
    name: "Huawei Global Service Center Romania",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bucharest",
    addressCountry: "Romania",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
          />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
