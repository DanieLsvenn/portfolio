import type { Metadata } from "next";
import { Outfit, Ovo } from "next/font/google";
import "./globals.css";

const fontOutfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const fontOvo = Ovo({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Portfolio - DanieLsven",
  description: "Portfolio of DanieLsven",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body
        className={`${fontOutfit.className} ${fontOvo.className} antialiased leading-8 overflow-x-hidden dark:bg-black dark:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
