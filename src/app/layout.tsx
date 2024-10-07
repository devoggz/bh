import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { NextUIProvider } from "@nextui-org/react";
import NavBar from "@/components/Navbar";
import MobileNav from "@/components/MobileNav";
import { SessionProvider } from "next-auth/react";
import { auth } from "../auth";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tuchanuane Tuinuane | BodaHub",
  description: "",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  return (
    <SessionProvider session={session}>
      <html lang="en">
        <body className={inter.className}>
          <NextUIProvider>
            {/* <NavBar /> */}

            {children}
            <Toaster />
            {/* <MobileNav /> */}
          </NextUIProvider>
        </body>
      </html>
    </SessionProvider>
  );
}
