"use client";

import Title from "./shared/title";
import { useLanguage } from "./language-provider";
import { getDataWorkExperience } from "@/data";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";

const WorkExperience = () => {
  const { locale } = useLanguage();
  const data = getDataWorkExperience(locale);

  return (
    <div className="p-6 md:px-12 md:py-44 max-w-5xl mx-auto" id="experience">
      <Title
        title={locale === "es" ? "Experiencia" : "Experience"}
        subtitle={locale === "es" ? "Mi trayectoria" : "My career"}
      />

      <div className="mt-10 relative">
        <div className="absolute left-6 top-0 bottom-0 w-px bg-gray-200" />

        <ul className="ml-12 space-y-10">
          {data.map((item) => {
            const initials = item.company
              .split(" ")
              .map((s: string) => s[0])
              .slice(0, 2)
              .join("");

            return (
              <li key={item.id} className="relative">
                <span className="absolute -left-8 top-2 bg-white border border-gray-300 rounded-full w-4 h-4" />

                <div className="p-5 rounded-xl border border-gray-400 bg-transparent">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <Avatar className="w-10 h-10 rounded-none">
                        {item.logo ? (
                          <AvatarImage
                            src={item.logo}
                            alt={`${item.company} logo`}
                          />
                        ) : (
                          <AvatarFallback>{initials}</AvatarFallback>
                        )}
                      </Avatar>

                      <h4 className="text-lg font-semibold">
                        {item.role}
                        <span className="text-gray-400 text-sm">
                          {" "}
                          — {item.company}
                        </span>
                      </h4>
                    </div>

                    <span className="text-sm text-gray-400">{item.period}</span>
                  </div>

                  <p className="mt-2 text-gray-300">{item.description}</p>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {item.techs.map((t: string) => (
                      <span
                        key={t}
                        className="text-xs bg-gray-800 px-2 py-1 rounded"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default WorkExperience;
