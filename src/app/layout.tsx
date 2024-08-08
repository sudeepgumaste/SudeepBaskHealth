import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import ProvidersWrapper from "@/wrappers/providers";

import Header from "@/components/templates/header";

import Container from "@/components/templates/content-container";

import { cn } from "@/utils/cn";
import Sidebar from "@/components/templates/sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Live Data",
  description: "Dynamic layout to arrange your live data in a desired grid",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="stylesheet" href="/assets/base-styles/3.css" />
      </head>
      <body className={inter.className}>
        <ProvidersWrapper>
          <>
            <Header />
            <main
              className={cn("grid grid-cols-1 gap-0 lg:grid-cols-[200px_auto]")}
            >
              <Sidebar />
              <section className="min-h-[calc(100vh-60px)] h-[calc(100vh-60px)] | overflow-y-auto | lg:px-6">
                <Container className="py-6 lg:py-12">{children}</Container>
              </section>
            </main>
          </>
        </ProvidersWrapper>
      </body>
    </html>
  );
}
