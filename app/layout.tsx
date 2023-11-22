import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Creon",
  description: `The world's first platform for Tokenizing AI blockchain projects`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
