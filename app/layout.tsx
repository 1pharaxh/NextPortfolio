import "@/styles/globals.css";
import { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://akarshan.vercel.app"),
  title: {
    default: "Akarshan Mishra",
    template: `%s | Akarshan Mishra`,
  },
  description: "Akarshan Mishras personal website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <meta name="msvalidate.01" content="63E8620A6D68DFAFE17EF7856B76E074" />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
