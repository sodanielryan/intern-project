"use client";

import { useEffect, useState } from "react";
import styles from "@/styles/ThemeToggle.module.css";

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "light") {
      setIsDark(false);
      document.documentElement.setAttribute("data-theme", "light");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = isDark ? "light" : "dark";
    setIsDark(!isDark);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <button className={styles.toggle} onClick={toggleTheme}>
      {isDark ? "☀️" : "🌙"}
    </button>
  );
};

export default ThemeToggle;