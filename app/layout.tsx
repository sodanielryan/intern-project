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
        <div className="pokeballs">
        {[...Array(13)].map((_, i) => (
        <img
          key={i}
          src="/pokeball.png"
          className={`pokeball-bg pokeball-bg-${i + 1}`}
          alt=""
          />
        ))}
      </div>
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