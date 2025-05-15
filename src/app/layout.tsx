import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import { AppWrapper } from "./context";
import SessionWrapper from "@/components/SessionWrapper/SessionWrapper";
import ErrorBoundary from "@/components/ErrorBoundary/ErrorBoundary";
import { Metadata } from "next";
import Footer from "@/components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  icons: {
    icon: "/letter-t.png",
  },
};

export const revalidate = 3600;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionWrapper>
          <AppWrapper>
            <ErrorBoundary>
              <Header />
              <main className="pt-12 min-h-screen bg-gray-100 md:px-20">
                <div className="py-16">{children}</div>
              </main>
              <Footer />
            </ErrorBoundary>
          </AppWrapper>
        </SessionWrapper>
      </body>
    </html>
  );
}
