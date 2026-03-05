import type { Metadata } from "next";
import Header from "@/components/Header";
import "./globals.css";
import FavoriteProvider from "./context/FavoriteContext";

export const metadata: Metadata = {
  title: "PokéDex",
  description: "A PokéDex built with Next.js and PokéAPI",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <FavoriteProvider>
        <Header />
        {children}
        </FavoriteProvider>
      </body>
    </html>
  );
};

export default RootLayout;
