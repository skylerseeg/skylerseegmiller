import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";

import { MotionProvider } from "@/components/providers/MotionProvider";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const description =
  "Builder, operator, creator. Currently building FieldBridge — Vista-native SaaS for heavy civil contractors.";

export const metadata: Metadata = {
  title: "Skyler Seegmiller",
  description,
  metadataBase: new URL("https://skylerseegmiller.com"),
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
  openGraph: {
    title: "Skyler Seegmiller",
    description,
    type: "website",
    url: "https://skylerseegmiller.com",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Skyler Seegmiller — Builder, Operator, Creator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Skyler Seegmiller",
    description,
    images: ["/og-image.svg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable}`}>
      <body className="bg-ink bg-grain bg-[length:200px_200px] font-sans text-bone antialiased">
        <a
          href="#main"
          className="sr-only focus-visible:not-sr-only focus-visible:fixed focus-visible:left-4 focus-visible:top-4 focus-visible:z-[100] focus-visible:rounded-md focus-visible:bg-ink focus-visible:px-4 focus-visible:py-2 focus-visible:text-bone"
        >
          Skip to content
        </a>
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
