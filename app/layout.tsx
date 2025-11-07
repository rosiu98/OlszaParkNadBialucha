import type { Metadata } from "next";
import { redHatFont } from "./ui/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Białucha",
  description:
    "Część Krakowa, która z roku na rok zyskuje coraz większe znaczenie. Łączy wygodę życia w mieście z bliskością natury i terenów rekreacyjnych.",
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
