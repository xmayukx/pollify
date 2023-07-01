import Navbar from "@/components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";

export const metadata = {
  title: "Pollify",
  description: "A poll making web-application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className='bg-polly font-body text-white'>
        <header>
         <Navbar/>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
