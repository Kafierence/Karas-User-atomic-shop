import React from "react";
import Image from "next/image";
import useTranslation from "next-translate/useTranslation";

//internal import
import Layout from "@layout/Layout";
import PageHeader from "@component/header/PageHeader";

const AboutUs = () => {
  const { t } = useTranslation();

  return (
    <Layout title="About Us" description="This is about us page">
      <PageHeader title="About-Us" />

      <div className="bg-white">
        <div className="max-w-screen-2xl mx-auto lg:py-20 py-10 px-4 sm:px-10">
          <div className="grid grid-flow-row lg:grid-cols-2 gap-4 lg:gap-16 items-center">
            <div className="">
              <h3 className="text-xl lg:text-3xl mb-2 font-serif font-semibold">
                {t("common:About-Us")}
              </h3>
              <div className="mt-3 text-base opacity-90 leading-7">
                <p>{t("common:About-Section-Top-P1")}</p>

                <p>{t("common:About-Section-Top-P2")}</p>
              </div>
              <div className="grid md:grid-cols-2 gap-6 lg:grid-cols-2 xl:gap-6 mt-8">
                <div className="p-8 bg-indigo-50 shadow-sm rounded-lg">
                  <span className="text-3xl block font-extrabold font-serif mb-4 text-gray-800">
                    10K
                  </span>
                  <h4 className="text-lg font-serif font-bold mb-1">
                    {t("common:About-Listed-Products-Box-Title")}
                  </h4>
                  <p className="mb-0 opacity-90 leading-7">
                    {t("common:About-Listed-Products-Box-Text")}
                  </p>
                </div>
                <div className="p-8 bg-indigo-50 shadow-sm rounded-lg">
                  <span className="text-3xl block font-extrabold font-serif mb-4 text-gray-800">8K</span>
                  <h4 className="text-lg font-serif font-bold mb-1">
                    {t("common:About-Customer-Box-Title")}
                  </h4>
                  <p className="mb-0 opacity-90 leading-7">{t("common:About-Customers-Box-Text")}</p>
                </div>
              </div>
            </div>
            <div className="mt-10 lg:mt-0">
              <Image width={920} height={750} src="/about-us.jpg" alt="logo" />
            </div>
          </div>
          <div className="mt-10 lg:mt-16 text-base opacity-90 leading-7">
            <p>{t("common:About-Section-Top-P3")}</p>

            <p>{t("common:About-Section-Top-P4")}</p>
          </div>
          <div className="mt-10 lg:mt-12 flex flex-col sm:grid gap-4">
            <Image
              width={1920}
              height={570}
              src="/about-banner.jpg"
              alt="logo"
              className="block rounded-lg"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutUs;
