"use client";
import { CustomizerContext } from "@/app/context/customizerContext";
import { Dropdown } from "flowbite-react";
import Image from "next/image";
import React, { useContext, useEffect } from "react";
import { useTranslation } from "react-i18next";

const Languages = [
  {
    flagname: "English",
    icon: "/images/flag/icon-flag-en.svg",
    value: "en",
  },
  {
    flagname: "Chinese",
    icon: "/images/flag/icon-flag-cn.svg",
    value: "ch",
  },
  {
    flagname: "French",
    icon: "/images/flag/icon-flag-fr.svg",
    value: "fr",
  },

  {
    flagname: "Arabic",
    icon: "/images/flag/icon-flag-sa.svg",
    value: "ar",
  },
];

export const Language = () => {
  const { i18n } = useTranslation();

  const { isLanguage, setIsLanguage } = useContext(CustomizerContext);
  const currentLang =
    Languages.find((_lang) => _lang.value === isLanguage) || Languages[0];

  useEffect(() => {
    i18n.changeLanguage(isLanguage);
  }, [isLanguage]);
  return (
    <>
      <div className="relative group/menu">
        <Dropdown
          label=""
          className="w-56 dark:bg-darkgray rounded-sm"
          dismissOnClick={false}
          renderTrigger={() => (
            <span className="h-10 w-10 hover:text-primary text-darklink hover:bg-lightprimary rounded-full flex justify-center items-center cursor-pointer group-hover/menu:bg-lightprimary group-hover/menu:text-primary ">
          <Image
            src={currentLang.icon}
            alt="logo"
            height={21}
            width={21}
            className="rounded-none"
            id="dropdownLanguage"
          />
            </span>
          )}
        >
          {Languages.map((item, index) => (
            <div className="flex gap-3 items-center py-2 cursor-pointer bg-hover px-6 text-dark dark:text-white hover:text-primary dark:hover:text-primary" key={index} onClick={() => setIsLanguage(item.value)} >
              <Image
                src={item.icon}
                alt="flag"
                width={20}
                height={20}
                className="rounded-none object-cover "
              />
              <span>{item.flagname}</span>
            </div>
          ))}
        </Dropdown>
      </div>
    </>
  );
};
