import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import useTranslation from "next-translate/useTranslation";
const CardTwo = () => {
  //promotion section
  const { t } = useTranslation()
  return (
    <>
      <div className="w-full bg-white shadow-sm lg:px-10 lg:py-5 p-6 rounded-lg">
        <div className="flex justify-between items-center">
          <div className="lg:w-3/5">
            <span className="text-base lg:text-lg">
              {t("common:Promotional-banner-title")}
            </span>
            <h2 className="font-serif text-lg lg:text-2xl font-bold mb-1">
              {t("common:Promotional-Banner-Title1")}
              <span className="text-emerald-500"> {t("common:Promotional-Banner-Title2")}</span>
            </h2>
            <p className="text-sm font-sans leading-6">
              {t("common:Promotional-Banner-Description")}
            </p>
            <Link href="#downloadApp">
              <a className="lg:w-1/4 text-xs font-serif font-medium inline-block mt-5 px-8 py-3 bg-emerald-500 text-center text-white rounded-full hover:text-white hover:bg-emerald-600">
                {t("common:Promotional-Banner-Link-Text")}
              </a>
            </Link>
          </div>
          <div className="w-1/5 flex-grow hidden lg:flex md:flex md:justify-items-center lg:justify-end">
            <Image
              width={373}
              height={250}
              src="/cta/delivery-boy.png"
              alt="app download"
              className="block w-auto"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CardTwo;
