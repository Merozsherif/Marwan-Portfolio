import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  User,
  Briefcase,
  Mail,
  Code,
  X,
  Moon,
  Sun,
  Download,
} from "lucide-react";
import { createPortal } from "react-dom";
import Link from "next/link";

interface MenuItem {
  label: string;
  icon: React.ReactNode;
  to: string;
}

interface MobileNavMenuProps {
  open: boolean;
  setIsOpen: (x: boolean) => void;
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const menuItems: MenuItem[] = [
  {
    label: "Home",
    icon: <Home className="w-5 h-5" />,
    to: "/",
  },
  {
    label: "About",
    icon: <User className="w-5 h-5" />,
    to: "/about",
  },
  {
    label: "Projects",
    icon: <Briefcase className="w-5 h-5" />,
    to: "/projects",
  },
  {
    label: "Skills",
    icon: <Code className="w-5 h-5" />,
    to: "/skills",
  },
  {
    label: "Contact",
    icon: <Mail className="w-5 h-5" />,
    to: "/contact",
  },
];

function MobileNavMenu({
  open,
  setIsOpen,
  isDarkMode,
  toggleTheme,
}: MobileNavMenuProps) {
  const [mounted, setMounted] = useState(false);

  // Ensure component is mounted before rendering to avoid hydration issues because of document access
  useEffect(() => {
    setMounted(true);
  }, []);

  // Close if Escape key is pressed
  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open, setIsOpen]);

  function handleBackdropClick() {
    setIsOpen(false);
  }

  function handleMenuItemClick() {
    // Delay closing to allow navigation animation
    setTimeout(() => setIsOpen(false), 150);
  }

  // Don't render anything until we're sure we're on the client to avoid hydration mismatch due to document access
  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={handleBackdropClick}
            className="fixed inset-0 z-900 bg-black/60 backdrop-blur-sm"
          />

          {/* Slide-in Menu from Right */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed right-0 top-0 bottom-0 z-999 w-[min(320px,85vw)] bg-(--custom-bg) shadow-2xl delay"
          >
            {/* Header with X button */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-(--border-color)">
              <h2 className="text-lg font-semibold text-(--text-color)">
                Navigation
              </h2>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-lg cursor-pointer hover:text-red-600 transition-colors text-(--text-color)"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Menu Items */}
            <nav className="flex flex-col p-4 space-y-1">
              {menuItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.to}
                  onClick={handleMenuItemClick}
                  className="flex items-center gap-4 px-4 py-3.5 rounded-lg text-base transition-all hover:bg-(--border-color) cursor-pointer active:scale-[0.98] group"
                >
                  <span className="text-(--text-color) opacity-70 group-hover:opacity-100 transition-opacity">
                    {item.icon}
                  </span>
                  <span className="text-(--text-color) font-medium">
                    {item.label}
                  </span>
                </Link>
              ))}
            </nav>

            {/* Divider */}
            <div className="border-t border-(--border-color) mx-4 my-2" />

            {/* Actions Section */}
            <div className="px-4 space-y-1">
              {/* Download CV */}
              <a
                href="/cv.pdf"
                download="Marwan-Sherif-CV.pdf"
                className="flex items-center gap-4 px-4 py-3.5 rounded-lg text-base transition-all hover:bg-(--border-color) cursor-pointer active:scale-[0.98] group"
              >
                <span className="text-(--text-color) opacity-70 group-hover:opacity-100 transition-opacity">
                  <Download className="w-5 h-5" />
                </span>
                <span className="text-(--text-color) font-medium">
                  Download CV
                </span>
              </a>

              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="w-full flex items-center gap-4 px-4 py-3.5 rounded-lg text-base transition-all hover:bg-(--border-color) cursor-pointer active:scale-[0.98] group"
              >
                <span className="text-(--text-color) opacity-70 group-hover:opacity-100 transition-opacity">
                  {isDarkMode ? (
                    <Sun className="w-5 h-5" />
                  ) : (
                    <Moon className="w-5 h-5" />
                  )}
                </span>
                <span className="text-(--text-color) font-medium">
                  {isDarkMode ? "Light Mode" : "Dark Mode"}
                </span>
              </button>
            </div>

            {/* Footer - Optional branding */}
            <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-(--border-color)">
              <p className="text-center text-sm text-(--text-color) opacity-50">
                © 2026 Marwan Sherif
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>,
    document.body,
  );
}

export default MobileNavMenu;
