import Head from "next/head";
import "./globals.css";
import { Inter } from "next/font/google";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Akarshan Mishra",
  description: "Akarshan Mishras personal website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <Script src="https://kit.fontawesome.com/a9aed2d42a.js"></Script>
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
