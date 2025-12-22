"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    console.log("Toggle clicked. Current:", theme, "Resolved:", resolvedTheme);
    if (theme === "system") {
      const newTheme = resolvedTheme === "dark" ? "light" : "dark";
      console.log("System mode. Switching to:", newTheme);
      setTheme(newTheme);
    } else {
      const newTheme = theme === "dark" ? "light" : "dark";
      console.log("Manual mode. Switching to:", newTheme);
      setTheme(newTheme);
    }
  };

  if (!mounted) return <div className="w-10 h-10" />;

  const isDark =
    mounted &&
    (theme === "dark" || (theme === "system" && resolvedTheme === "dark"));

  return (
    <button
      onClick={toggleTheme}
      className="relative w-10 h-10 rounded-full border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 transition-all flex items-center justify-center group"
      aria-label="Toggle theme"
    >
      <Sun
        size={18}
        className={`absolute text-light-primary transition-all duration-300 ${isDark ? "opacity-0 rotate-90" : "opacity-100 rotate-0"}`}
      />
      <Moon
        size={18}
        className={`absolute text-holographic transition-all duration-300 ${isDark ? "opacity-100 rotate-0" : "opacity-0 -rotate-90"}`}
      />

      {/* Active Indicator */}
      <div
        className={`absolute inset-0 rounded-full bg-gradient-to-tr from-light-primary/20 to-transparent blur-sm transition-opacity duration-300 ${isDark ? "opacity-0" : "opacity-100"}`}
      />
      <div
        className={`absolute inset-0 rounded-full bg-gradient-to-tr from-holographic/20 to-transparent blur-sm transition-opacity duration-300 ${isDark ? "opacity-100" : "opacity-0"}`}
      />
    </button>
  );
}
