import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Home Cleanse",
  description: "A lighter home before move day. Cleanse every room and track what has truly left.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
