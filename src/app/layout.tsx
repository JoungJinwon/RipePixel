import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RipePixel - Indie Game Development Studio",
  description:
    "Creating innovative and immersive indie games that push the boundaries of creativity and storytelling.",
  keywords:
    "indie games, game development, RipePixel, gaming studio, creative games",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className="antialiased">{children}</body>
    </html>
  );
}
