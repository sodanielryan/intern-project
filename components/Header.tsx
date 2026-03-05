import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/Header.module.css";
import ThemeToggle from "@/components/ThemeToggle";

const Header = () => {
  return (
    <header className={styles.header}>
      <header className={styles.header}>
        <div className={styles.left}>
          <Link href="/" className={styles.logo}>
            <Image
              src="/Pokemon-Logo-Transparent-Image.png"
              alt="Pokémon Logo"
              width={70}
              height={25}
              className={styles.logoImage}
            />
          </Link>
          <span className={styles.divider} />
          <span className={styles.title}>OurDex</span>
        </div>
      </header>
      <nav className={styles.nav}>
        <Link href="/pokemon" className={styles.navLink}>
          Generations
        </Link>
        <Link href="/types" className={styles.navLink}>
          Types
        </Link>
        <Link href="/aboutus" className={styles.navLink}>
          About Us
        </Link>
        <div className={styles.pokeball} />
        <ThemeToggle />
      </nav>
    </header>
  );
};

export default Header;
