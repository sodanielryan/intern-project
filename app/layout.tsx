import type { Metadata } from "next";
import Header from "@/components/Header";
import "./globals.css";
import FavoriteProvider from "@/context/FavoriteContext";
import TeamProvider from "@/context/TeamContext";

export const metadata: Metadata = {
  title: "PokéDex",
  description: "A PokéDex built with Next.js and PokéAPI",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <FavoriteProvider>
          <TeamProvider>
            <Header />
            {children}
          </TeamProvider>
        </FavoriteProvider>
      </body>
    </html>
  );
};

export default RootLayout;
