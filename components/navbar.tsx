"use client";

import { getItemsNavbar } from "@/data";
import Link from "next/link";
import Image from "next/image";
import { ToggleTheme } from "./toggle-theme";
import { ToggleLanguage } from "./toggle-language";
import { useLanguage } from "./language-provider";

const Navbar = () => {
  const { locale } = useLanguage();

  const itemsNavbar = getItemsNavbar(locale);

  return (
    <nav className="fixed z-20 left-0 bottom-20 w-full flex justify-center md:left-6 md:top-1/2 md:bottom-auto md:w-auto md:transform md:-translate-y-1/2">
      <div className="flex items-center gap-3 px-4 py-1 dark:bg-white/10 bg-slate-800/10 background-blur-sm rounded-full md:flex-col md:px-3 md:py-4">
        <div className="pt-1 md:pt-0">
          <Link href="#home" className="flex items-center">
            <h1>JN</h1>
          </Link>
        </div>
        {itemsNavbar.map((item) => (
          <div
            key={item.id}
            className="cursor-pointer hover:dark-bg-slate-800 hover:bg-slate-400 p-2 rounded-full transition duration-150"
          >
            <Link href={item.link} title={item.title} aria-label={item.title}>
              {item.icon}
            </Link>
          </div>
        ))}
        <div className="pt-1 md:pt-0">
          <ToggleLanguage />
        </div>
        <div className="pt-1 md:pt-0">
          <ToggleTheme />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
