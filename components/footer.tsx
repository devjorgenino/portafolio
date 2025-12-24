"use client";

import Link from "next/link";
import { Separator } from "./ui/separator";
import { useLanguage } from "./language-provider";

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();
  const footerText = t("footer_text").replace("{year}", String(currentYear));

  return (
    <footer className="max-w-3xl mx-auto px-4" role="contentinfo">
      <div className="md:flex md:justify-between md:items-center py-6">
        <div>
          <h4 className="text-3xl font-bold my-0">JN</h4>
        </div>

        <nav
          className="mt-4 md:mt-0"
          aria-label={t("nav_about") + " navigation"}
        >
          <ul className="flex gap-4 md:gap-8 justify-center md:justify-end items-center text-sm">
            <li>
              <Link href="#about-me" className="hover:underline">
                {t("nav_about")}
              </Link>
            </li>
            <li>
              <Link href="#experience" className="hover:underline">
                {t("nav_experience")}
              </Link>
            </li>
            <li>
              <Link href="#skills" className="hover:underline">
                {t("nav_skills")}
              </Link>
            </li>
            <li>
              <Link href="#services" className="hover:underline">
                {t("nav_services")}
              </Link>
            </li>
            <li>
              <Link href="#portfolio" className="hover:underline">
                {t("nav_portfolio")}
              </Link>
            </li>
            <li>
              <Link href="#contact" className="hover:underline">
                {t("nav_contact")}
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <Separator className="my-4" />

      <div className="text-center text-sm text-slate-600 dark:text-slate-300 py-4">
        {footerText}
      </div>
    </footer>
  );
};

export default Footer;
