import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bankify",
  description: "Make Banking simple & modern",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="text-lg">
        {children}
      </body>
    </html>
  );
}
