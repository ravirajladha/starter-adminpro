
import React from "react";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./css/globals.css";
import { Flowbite, ThemeModeScript } from "flowbite-react";
import customTheme from "@/utils/theme/custom-theme";
import { CustomizerContextProvider } from "./context/customizerContext";
import "./api/index"
import '../utils/i18n';

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Adminpro Starterkit - Nextjs",
  description: "Adminpro",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    
      <html lang="en">
        <head>
          <ThemeModeScript />
        </head>
        <body className={`${montserrat.className}`} >
        <Flowbite theme={{ theme: customTheme }}>
          <CustomizerContextProvider>
              {children}
          </CustomizerContextProvider>
          </Flowbite>
        </body>
      </html>
  );
}
