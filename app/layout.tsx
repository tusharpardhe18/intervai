import type { Metadata } from "next";
import { Mona_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import Loader from "@/components/ui/loader";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const monaSans = Mona_Sans({
  variable: "--font-mona-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "IntervAI",
  description: "An AI-powered platform for preparing for mock interviews.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => setLoading(false), 500); // Adjust duration as needed
    return () => clearTimeout(timeout);
  }, [pathname]);

  return (
    <html lang="en" className="dark">
      <body className={`${monaSans.className} antialiased pattern`}>
        {loading && <Loader />}
        {children}
        <Toaster />
      </body>
    </html>
  );
}
