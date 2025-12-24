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
      <div className="flex flex-col items-center gap-3 px-3 py-3 dark:bg-white/10 bg-slate-800/10 backdrop-blur-sm rounded-lg">
        <div className="pt-0 mb-[-15px]">
          <Link href="#home" className="flex items-center justify-center">
            <div className="relative w-[5rem] h-[5rem] md:w-[5rem] md:h-[5rem]">
              {mounted && (
                <Image
                  src={logoSrc}
                  alt="Logo"
                  fill
                  className="object-contain"
                />
              )}
            </div>
          </Link>
        </div>

        {itemsNavbar.map((item) => (
          <div
            key={item.id}
            className="cursor-pointer p-3 rounded-full transition duration-150 hover:bg-slate-200 dark:hover:bg-slate-700"
          >
            <Link
              href={item.link}
              title={item.title}
              aria-label={item.title}
              className="flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-full"
            >
              {item.icon}
            </Link>
          </div>
        ))}

        <div>
          <div className="p-1 rounded-full">
            <ToggleLanguage />
          </div>
        </div>

        <div>
          <div className="p-1 rounded-full">
            <ToggleTheme />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
