import { useEffect, useState } from "react";

// Global state to sync multiple instances of the hook
let globalIsDark: boolean | null = null;
const listeners = new Set<(isDark: boolean) => void>();

function setGlobalTheme(isDark: boolean) {
  globalIsDark = isDark;
  
  const root = document.documentElement;
  if (isDark) {
    root.classList.add("dark");
    localStorage.setItem("ewebworld-theme", "dark");
  } else {
    root.classList.remove("dark");
    localStorage.setItem("ewebworld-theme", "light");
  }

  listeners.forEach((listener) => listener(isDark));
}

export function useTheme() {
  const [isDark, setIsDark] = useState(() => {
    if (globalIsDark !== null) return globalIsDark;
    
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("ewebworld-theme");
      if (savedTheme) {
        return savedTheme === "dark";
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return true;
  });

  useEffect(() => {
    listeners.add(setIsDark);
    
    // Initial sync for this instance
    if (globalIsDark === null) {
        setGlobalTheme(isDark);
    }

    return () => {
      listeners.delete(setIsDark);
    };
  }, []);

  const toggleTheme = () => setGlobalTheme(!isDark);

  return { isDark, toggleTheme };
}

