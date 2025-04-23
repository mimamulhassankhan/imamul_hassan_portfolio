import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./global.css";
import SideBar from "@/components/SideBar/SideBar";
import SocialTray from "@/components/SocialTray/SocialTray";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Imamul Hassan Portfolio",
  description: "Personal portfolio website of Imamul Hassan",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex min-h-screen">
          <SideBar />
          <main className="flex-1 ml-64">{children}</main>
          <SocialTray />
        </div>
      </body>
    </html>
  );
}
