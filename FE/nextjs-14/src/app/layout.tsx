'use client';
import { Inter, Margarine } from "next/font/google";
import "./globals.css";
import dynamic from "next/dynamic";
import ResponsiveAppBar from "./components/common/header";
import { parseCookies } from "nookies";
import Header from "./components/common/header";
import { Provider } from "react-redux";
import { store } from "@/redux";

const ReduxProvider = dynamic(()=> import("@/redux/redux-provider"),{
  ssr:false
});

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={inter.className}>
        
        <div className="mt-100">
        
        <ReduxProvider>
        {parseCookies().message === 'Success' && <Header/>}
          {children}
          </ReduxProvider>
        </div>
        </body>
    </html>
  );
}
