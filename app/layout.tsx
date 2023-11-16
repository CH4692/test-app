import type { Metadata } from "next";
import { Inter, Open_Sans } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });
const openSans = Open_Sans({ subsets: ["latin"] });



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/test-nextjs/app/favicon.ico" />
        <title>To-Do-App</title>
        <meta name="description" content="A simple Todo App" />
      </Head>
      <body className={`${openSans.className} `}>
        <div className="relative min-h-screen min-w-screen flex justify-center items-center bg-accent flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}
