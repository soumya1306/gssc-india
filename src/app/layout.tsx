import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono, Montserrat } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800", "900"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "GSSC India | Gas & Steam Solutions Company",
  description:
    "GSSC INDIA is a premier industrial engineering partner delivering comprehensive steam turbine, gas turbine, plant overhaul, electromechanical, and heavy industrial maintenance solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${plusJakartaSans.variable} ${jetbrainsMono.variable} ${montserrat.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
