import { useEffect, useState } from "react";

export function useDarkMode() {
  const [darkMode, setDarkMode] = useState(false);

  // On mount, check the initial theme and set it accordingly to avoid hydration issues with theme toggling
  useEffect(() => {
    // Sync with what the script set
    setDarkMode(document.documentElement.classList.contains("dark"));
  }, []);

  // Whenever darkMode changes, update the class on the document and localStorage
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return {
    darkMode,
    toggleDarkMode: () => setDarkMode((prev) => !prev),
  };
}
