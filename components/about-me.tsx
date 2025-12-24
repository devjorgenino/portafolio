"use client";

import { Phone } from "lucide-react";

import { getDataAboutMe, getDataSlider } from "@/data";

import Title from "./shared/title";
import { useLanguage } from "./language-provider";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Button } from "./ui/button";
import Image from "next/image";

const AboutMe = () => {
  const { t, locale } = useLanguage();

  const dataAboutMe = getDataAboutMe(locale);
  const dataSlider = getDataSlider();

  return (
    <div className="p-6 md:px-12 md:py-30 max-w-5xl mx-auto" id="about-me">
      <Title title={t("about_title")} subtitle={t("about_sub")} />

      <div className="grid md:grid-cols-2 gap-8">
        <div className="py-8 md:py-0 flex items-center justify-center">
          {/* CAROUSEL */}
          <Carousel
            opts={{
              align: "start",
            }}
            orientation="vertical"
            className="w-full max-w-xs h-fit"
          >
            <CarouselContent className="-mt-1 h-[200px]">
              {dataSlider.map((data) => (
                <CarouselItem key={data.id}>
                  <div className="flex items-center justify-center">
                    <Image
                      src={data.url}
                      alt={t("image_profile_alt")}
                      width={250}
                      height={400}
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
        <div>
          <div className="grid md:grid-cols-3 mt-7 gap-4">
            {dataAboutMe.map((data) => (
              <div
                key={data.id}
                className="border border-white-10 rounded-xl p-4 shadow-md shadow-slate-100 dark:bg-slate-800"
              >
                {data.icon}
                <p className="my-2">{data.name}</p>
                <p className="text-gray-400">{data.description}</p>
              </div>
            ))}
          </div>
          <p className="my-8 leading-relaxed text-slate-700 dark:text-slate-300">
            {t("about_paragraph")}
          </p>

          <Button>
            <Phone size={20} className="mr-2" />
            {t("talk")}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
