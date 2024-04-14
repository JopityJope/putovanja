import type { Metadata } from "next";
import { Bodoni_Moda, Bellefair, Red_Hat_Display } from "next/font/google";
import "./globals.css";

const Bodoni_Moda_init = Bodoni_Moda({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-bodini-moda",
});

const Bellefair_init = Bellefair({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-bellefair",
});

const RedHatDisplay_init = Red_Hat_Display({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-red-hat-display",
});

export const metadata: Metadata = {
  title: "Putovanje",
  description: "Putovanje u XIX veku",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="text-[62.5%]">
      <body
        suppressHydrationWarning={true}
        className={`${Bodoni_Moda_init.variable} ${RedHatDisplay_init.variable} ${Bellefair_init.variable} font-bodoniModa`}
      >
        {children}
      </body>
    </html>
  );
}
