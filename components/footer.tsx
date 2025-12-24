"use client";

import Link from "next/link";
import Image from "next/image";
import { Separator } from "./ui/separator";
import { useLanguage } from "./language-provider";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const Footer = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();
  const footerText = t("footer_text").replace("{year}", String(currentYear));

  const { resolvedTheme } = useTheme();
  const logoSrc =
    resolvedTheme === "dark" ? "/logo-white.png" : "/logo-black.png";

  return (
    <footer className="max-w-3xl mx-auto px-4 sm:px-6" role="contentinfo">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-6">
        <div className="flex justify-center sm:justify-start">
          <div className="relative w-24 h-24 sm:w-24 sm:h-24">
            <Link href="#home" className="flex items-center justify-center">
              {mounted && (
                <Image
                  src={logoSrc}
                  alt="Logo"
                  fill
                  className="object-contain"
                />
              )}
            </Link>
          </div>
        </div>

        <nav
          className="mt-4 sm:mt-0 w-full sm:w-auto"
          aria-label={t("nav_about") + " navigation"}
        >
          <ul className="flex flex-wrap gap-2 sm:gap-4 justify-center sm:justify-end items-center text-sm">
            <li>
              <Link
                href="#about-me"
                className="block px-2 py-1 rounded-md hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2"
              >
                {t("nav_about")}
              </Link>
            </li>
            <li>
              <Link
                href="#experience"
                className="block px-2 py-1 rounded-md hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2"
              >
                {t("nav_experience")}
              </Link>
            </li>
            <li>
              <Link
                href="#skills"
                className="block px-2 py-1 rounded-md hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2"
              >
                {t("nav_skills")}
              </Link>
            </li>
            <li>
              <Link
                href="#services"
                className="block px-2 py-1 rounded-md hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2"
              >
                {t("nav_services")}
              </Link>
            </li>
            <li>
              <Link
                href="#portfolio"
                className="block px-2 py-1 rounded-md hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2"
              >
                {t("nav_portfolio")}
              </Link>
            </li>
            <li>
              <Link
                href="#contact"
                className="block px-2 py-1 rounded-md hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2"
              >
                {t("nav_contact")}
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <Separator className="my-4" />

      <div className="text-center text-sm text-slate-600 dark:text-slate-300 py-4">
        {mounted && footerText}
      </div>
    </footer>
  );
};

export default Footer;
