import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display, Hind_Siliguri } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const hindSiliguri = Hind_Siliguri({
  variable: "--font-hind-siliguri",
  subsets: ["bengali", "latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Naznin Rahman | Official Website",
  description: "Official Website of Naznin Rahman — Public Leader, Social Advocate, Voice of the People.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="bn"
      className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} ${hindSiliguri.variable} h-full antialiased dark`}
    >
      <body className="min-h-full bg-black text-white flex flex-col font-sans selection:bg-[#C59B55] selection:text-black">
        {children}
      </body>
    </html>
  );
}
