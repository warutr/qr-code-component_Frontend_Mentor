import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const OutfitFont = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "QR code component",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={OutfitFont.className}>
        <main className="h-screen bg-light-gray items-center justify-center flex">
          {children}
        </main>
      </body>
    </html>
  );
}
