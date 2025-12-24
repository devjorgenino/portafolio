"use client";

import { getDataServices } from "@/data";
import Title from "./shared/title";
import { useLanguage } from "./language-provider";
import { Check } from "lucide-react";

const Services = () => {
  const { t, locale } = useLanguage();
  const dataServices = getDataServices(locale);

  return (
    <div className="p-6 md:px-12 md:py-24 max-w-5xl mx-auto" id="services">
      <Title title={t("services_title")} subtitle={t("services_sub")} />

      <div className="grid md:grid-cols-3 gap-5 mt-7">
        {dataServices.map((service) => (
          <div
            key={service.id}
            className="rounded-xl border-slate-400 border-2 p-6 dark:bg-slate-800 h-fit"
          >
            <h4 className="mb-4 text-xl flex gap-2">
              {service.icon}
              {service.title}
            </h4>
            <h1 className="mb-4 text-3xl md:text-xl justify-center flex gap-2">
              {service.subtitle}
            </h1>
            <ul>
              {service.features.map((feature, index) => (
                <li key={index} className="flex gap-3 mb-3">
                  <Check size={20} />
                  {feature.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
