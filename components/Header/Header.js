import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTheme } from "next-themes";
import { MdOutlineDarkMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";

const Header = () => {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <nav className="flex w-full border-b border-black/10 dark:border-white/10 font-audiowide">
      <div className="flex p-8 md:w-2/3 w-1/2 box-border items-center border-r border-black/10 dark:border-white/10">
        <h1 className="text-xl md:text-3xl grow text-[#DD0000]">luna ocean</h1>
        {currentTheme === "dark" ? (
          <MdOutlineDarkMode
            className="cursor-pointer"
            size={28}
            onClick={() => setTheme("light")}
          />
        ) : (
          <MdDarkMode
            className="cursor-pointer"
            size={28}
            onClick={() => setTheme("dark")}
          />
        )}
      </div>

      <div className="flex md:w-1/3 w-1/2 justify-center items-center gap-10 md:gap-14 xl:gap-36">
        <Link
          className="no-underline]"
          href="/"
          style={{ color: router.route === "/" ? "#DD0000" : "#9e9e9e" }}
        >
          About
        </Link>
        <Link
          className="no-underline"
          href="/contact"
          style={{ color: router.route === "/" ? "#9e9e9e" : "#DD0000" }}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Header;
