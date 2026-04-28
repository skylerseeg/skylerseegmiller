import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
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

export const metadata: Metadata = {
  title: "Skyler Seegmiller",
  description:
    "Builder, operator, creator. Currently building FieldBridge — Vista-native SaaS for heavy civil contractors.",
  metadataBase: new URL("https://skylerseegmiller.com"),
  openGraph: {
    title: "Skyler Seegmiller",
    description:
      "Builder, operator, creator. Currently building FieldBridge — Vista-native SaaS for heavy civil contractors.",
    type: "website",
    url: "https://skylerseegmiller.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Skyler Seegmiller",
    description:
      "Builder, operator, creator. Currently building FieldBridge — Vista-native SaaS for heavy civil contractors.",
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
        {children}
      </body>
    </html>
  );
}
