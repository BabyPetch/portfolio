import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "km.dev — Full Stack Developer & AI Engineer",
    template: "%s | km.dev",
  },
  description:
    "Full Stack Developer & AI Engineer building production web applications with clean architecture and real-world impact.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}