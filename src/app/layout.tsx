import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Snigdha Bhadra | Japanese Classes",
  description: "Learn Japanese with Snigdha Bhadra — JLPT-focused, beginner friendly.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
