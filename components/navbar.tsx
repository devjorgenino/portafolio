"use client";

import { getItemsNavbar } from "@/data";
import Link from "next/link";
import Image from "next/image";
import { ToggleTheme } from "./toggle-theme";
import { ToggleLanguage } from "./toggle-language";
import { useLanguage } from "./language-provider";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const Navbar = () => {
  const { locale } = useLanguage();
  const { resolvedTheme } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const logoSrc =
    resolvedTheme === "dark" ? "/logo-white.png" : "/logo-black.png";

  const itemsNavbar = getItemsNavbar(locale);

  return (
    <nav
      className="fixed z-20 left-4 top-1/2 transform -translate-y-1/2 flex flex-col items-center gap-3 md:left-6 md:top-1/2"
      aria-label="Main navigation"
    >
      <div className="flex flex-col items-center gap-1 px-1 py-1 dark:bg-white/10 bg-slate-800/10 backdrop-blur-sm rounded-lg">
        <div className="cursor-pointer p-1 rounded-full transition duration-150 hover:bg-slate-200 dark:hover:bg-slate-700">
          <div className="pt-1 md:pt-0">
            <Link href="#home" className="flex items-center">
              <h1>JN</h1>
            </Link>
          </div>
        </div>

        {itemsNavbar.map((item) => (
          <div
            key={item.id}
            className="cursor-pointer p-2 rounded-full transition duration-150 hover:bg-slate-200 dark:hover:bg-slate-700"
          >
            <Link
              href={item.link}
              title={item.title}
              aria-label={item.title}
              className="flex items-center justify-center focus:outline-none focus:ring-1 focus:ring-offset-1 focus:p-1 hover:p-1 rounded-full"
            >
              {item.icon}
            </Link>
          </div>
        ))}

        <div className="p-0 rounded-full">
          <ToggleLanguage />
        </div>

        <div className="p-1 rounded-full">
          <ToggleTheme />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
