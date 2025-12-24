"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, Paperclip } from "lucide-react";

import { buttonVariants } from "./ui/button";

import Container from "./shared/container";
import { useLanguage } from "./language-provider";

const Introduction = () => {
  const { t, locale } = useLanguage();

  const cvFile =
    locale === "en" ? "cv-jorgenino-en.pdf" : "cv-jorgenino-es.pdf";
  const cvHref = `/${cvFile}`;

  return (
    <Container>
      <div className="text-center" id="home">
        <h3 className="text-xl mb-3">{t("hello_im")}</h3>
        <h1 className="text-4xl font-bold mb-3">Jorge Niño 👨‍💻</h1>
        <h2 className="text-2xl text-gray-400">{t("frontend")}</h2>
        <div className="flex items-center">
          <div className="flex flex-col md:flex-row gap-4 justify-between mt-10 mx-auto">
            <Link className={buttonVariants()} href="#contact">
              <Mail className="mr-2" /> {t("contact_me")}
            </Link>

            <Link
              className={buttonVariants({ variant: "secondary" })}
              href={cvHref}
              target="_blank"
              download={cvFile}
              aria-label={t("download_cv")}
            >
              <Paperclip className="mr-2" /> {t("download_cv")}
            </Link>
          </div>
        </div>
        <Image
          src="/profile.png"
          alt={t("image_profile_alt")}
          width={500}
          height={500}
          className="mx-auto mt-20 object-fill:cover w-80 h-80"
          style={{
            borderRadius: "40% 60% 70% 30% / 40% 50% 60% 50%",
            transition: "border-radius 0.5s ease",
          }}
        />
      </div>
    </Container>
  );
};

export default Introduction;
