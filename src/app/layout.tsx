import './globals.css'
import type { Metadata } from 'next'
import RootProvider from "@/lib/Provider";
export const metadata: Metadata = {
  title: "Painting Service",
  description: "Generated by create next app",
  icons: "/icon.png",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <RootProvider>
      <html lang="en">
        <body>{children}</body>
      </html>
    </RootProvider>
  );
}
