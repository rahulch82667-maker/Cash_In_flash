import type { Metadata } from "next";
import { Poppins, Tilt_Warp } from "next/font/google";
import "./globals.css";

/* Poppins (used for body text, buttons, etc.) */
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

/* Tilt Warp (used only for hero headings) */
const tiltWarp = Tilt_Warp({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-tilt",
});

export const metadata: Metadata = {
  title: "Cash in Flash",
  description: "Get instant cash for your car",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${tiltWarp.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-[var(--font-poppins)]">
        {children}
      </body>
    </html>
  );
}