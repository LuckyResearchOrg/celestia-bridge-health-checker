import type { Metadata } from "next";
import React from "react";
import '@/src/app/styles/index.scss'
import PageContainer from "@/src/shared/ui/page-container/PageContainer";
import FloatingBall from "@/src/shared/ui/floating-ball/FloatingBall";
import Footer from "@/src/widgets/footer/ui/Footer";
import Header from "@/src/widgets/header/ui/Header";

export const metadata: Metadata = {
  title: "Celestia Bridge Node Health Checker",
  description: "DTEAM's Celestia Bridge Health Checker, the ultimate tool for ensuring the reliability and security of your Celestia bridge node. Designed with the community in mind, this checker allows you to easily verify the health of your bridge nodes. Simply enter your IP, port, and authentication token to get started.",
  keywords: ["DTEAM", "Bridge Node Health Checker", "Celestia"],
  metadataBase: new URL("https://celestia-bridge-checker.dteam.tech/"),
  openGraph: {
    title: "Celestia Bridge Node Health Checker",
    description: "DTEAM's Celestia Bridge Health Checker, the ultimate tool for ensuring the reliability and security of your Celestia bridge node. Designed with the community in mind, this checker allows you to easily verify the health of your bridge nodes. Simply enter your IP, port, and authentication token to get started.",
    url: "https://celestia-bridge-checker.dteam.tech/",
    type: "website",
    images: [
      {
        url: "https://raw.githubusercontent.com/DTEAMTECH/contributions/main/celestia/utils/celestia_bridge.png",
        width: 1200,
        height: 630,
        alt: "DTEAM Celestia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@dteamtech",
    title: "Celestia Bridge Node Health Checker",
    description: "DTEAM's Celestia Bridge Health Checker, the ultimate tool for ensuring the reliability and security of your Celestia bridge node. Designed with the community in mind, this checker allows you to easily verify the health of your bridge nodes. Simply enter your IP, port, and authentication token to get started.",
    images: "https://raw.githubusercontent.com/DTEAMTECH/contributions/main/celestia/utils/celestia_bridge.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body style={{overflowX: "hidden"}}>
      <PageContainer>
        <Header />
        {children}
        <FloatingBall left="10%" top="20%" size="30vw" animationDuration={3} imageUrl={"/images/celestia.svg"}/>
        <FloatingBall left="70%" top="50%" size="50vw" animationDuration={5} imageUrl={"/images/celestia.svg"}/>
      </PageContainer>
      <Footer/>
    </body>
    </html>
  );
}
