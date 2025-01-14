import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

const Header = () => {
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      return localStorage.getItem("theme") || (prefersDark ? "dark" : "light");
    }
    return "light";
  });

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolling
          ? "bg-gradient-to-r from-indigo-500 to-blue-500 dark:from-gray-900 dark:to-gray-800 backdrop-blur-lg shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <span className="text-3xl font-extrabold text-white hover:text-gray-300 transition-colors">
            Isha Goyal
          </span>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-3 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label="Toggle dark mode"
          >
            {theme === "dark" ? (
              <Sun className="w-6 h-6 text-yellow-400 transition-colors" />
            ) : (
              <Moon className="w-6 h-6 text-white transition-colors" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
