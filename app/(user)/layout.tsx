import "@/styles/globals.css";
import { Inter } from "next/font/google";

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
      <body className={inter.className}>
        {/* Give Grid Background */}
        <div className="main " />
        {children}
      </body>
    </html>
  );
}