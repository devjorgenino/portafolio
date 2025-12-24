"use client";

import { getDataPortfolio, getDataContact } from "@/data";
import Title from "./shared/title";
import { useLanguage } from "./language-provider";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "./ui/button";

const Portfolio = () => {
  const { t, locale } = useLanguage();
  const dataPortfolio = getDataPortfolio(locale);
  const urlGithub = getDataContact(locale)[1];

  return (
    <div className="p-4 max-w-4xl md:py-24 mx-auto" id="portfolio">
      <Title title={t("portfolio_title")} subtitle={t("portfolio_sub")} />

      <div className="grid md:grid-cols-3 gap-14 mt-4">
        {dataPortfolio.map((data) => (
          <div key={data.id}>
            <h3 className="text-xl mb-4">{data.title}</h3>
            <Image
              src={data.image}
              alt="Image"
              width={300}
              height={300}
              className="rounded-2xl w-full"
            />

            <div className={`mt-5 flex ${data.urlDesign ? "gap-1" : "gap-4"}`}>
              <Link
                className={buttonVariants({ variant: "outline" })}
                href={data.urlGithub}
                target="_blank"
              >
                Github
              </Link>

              {data.urlDesign && (
                <Link
                  className={buttonVariants({ variant: "link" })}
                  href={data.urlDesign}
                  target="_blank"
                >
                  {locale === "es" ? "Diseño" : "Design"}
                </Link>
              )}

              <Link
                className={buttonVariants()}
                href={data.urlDemo}
                target="_blank"
              >
                {locale === "es" ? "Live demo" : "Live demo"}
              </Link>
            </div>
          </div>
        ))}
        <div className="flex flex-col justify-center items-center">
          <Link
            className={buttonVariants({ variant: "outline" })}
            href={urlGithub.link}
            target="_blank"
          >
            {locale === "es" ? "Ver más proyectos" : "See more projects"}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
