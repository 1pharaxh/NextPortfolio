import "@/styles/globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Akarshan's Blog | LeetCode, Coding Challenges & Software Development",
  description:
    "Join Me on my journey through LeetCode problems, coding challenges, and software development. Learn new skills and improve your coding abilities.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
