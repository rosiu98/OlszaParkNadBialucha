import type { Metadata } from "next";
import { redHatFont } from "./ui/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Olsza Park Nad Białuchą",
  description:
    "Zielona oaza położona w malowniczej dzielnicy Olsza, w pobliżu rzeki Białucha. Park oferuje spokojne miejsce do wypoczynku, aktywności na świeżym powietrzu oraz rekreacji dla całych rodzin. W jego centrum znajduje się przestronny trawnik idealny na pikniki, a także liczne ścieżki spacerowe i rowerowe, które wiją się wśród starannie utrzymanej roślinności.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#F9F9F1" />
      </head>
      <body className={`${redHatFont.className} antialiased relative`}>
        {children}
      </body>
    </html>
  );
}
