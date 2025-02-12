import { Metadata } from "next";
import { Noto_Sans_SC } from "next/font/google";
import "./globals.css";
import { ViewTransitions } from "next-view-transitions";

const notoSans = Noto_Sans_SC({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "沫尘屋",
  robots: "noindex, nofollow",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ViewTransitions>
      <html lang="zh-CN">
        <body className={notoSans.className}>{children}</body>
      </html>
    </ViewTransitions>
  );
}
