"use client";

import { Menu, Moon, Sun } from "lucide-react";
import { useState, useEffect } from "react";
import MobileNavMenu from "./mobileMenu";
import { useDarkMode } from "../_hooks/useDarkMode";

const buttonClasses =
  "p-2 hover:bg-(--gray-bg) cursor-pointer rounded-[0.625rem] transition-all ease-in duration-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-(--orange-text)";
const iconClasses = "w-5 h-5 text-(--nav-links-text)";

function DarkModeAndBurgerIcon() {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const [isopen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Set mounted to true after the component mounts to avoid hydration issues with with theme toggling icons
  useEffect(() => {
    setMounted(true);
  }, []);

  function handleSetOpen(value: boolean) {
    setIsOpen(value);
  }

  return (
    <div className="flex justify-end gap-4 py-3">
      <button
        onClick={toggleDarkMode}
        aria-label="Toggle dark mode"
        className={buttonClasses}
      >
        {mounted ? (
          darkMode ? (
            <Sun className={iconClasses} aria-hidden="true" />
          ) : (
            <Moon className={iconClasses} aria-hidden="true" />
          )
        ) : (
          // Render a placeholder or default icon during SSR
          <Moon className={iconClasses} aria-hidden="true" />
        )}
      </button>

      <button
        className={`${buttonClasses} md:hidden`}
        onClick={() => setIsOpen(!isopen)}
        aria-label="Open Mobile window"
      >
        <Menu className={iconClasses} aria-hidden="true" />
      </button>

      <MobileNavMenu
        open={isopen}
        setIsOpen={handleSetOpen}
        isDarkMode={darkMode}
        toggleTheme={toggleDarkMode}
      />
    </div>
  );
}

export default DarkModeAndBurgerIcon;
