import React from "react";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";
//internal import
import Layout from "@layout/Layout";
import PageHeader from "@component/header/PageHeader";

const TermAndConditions = () => {
  const { t } = useTranslation();
  return (
    <Layout title="Terms & Conditions" description="This is terms and conditions page">
      <PageHeader title="Terms-&-Conditions" />
      <div className="bg-white">
        <div className="max-w-screen-2xl mx-auto lg:py-20 py-10 px-3 sm:px-10">
          <div className="mb-8 lg:mb-12 last:mb-0">
            <h2 className="text-xl xl:text-2xl xl:leading-7 font-semibold font-serif mb-2 lg:mb-4">
              {t("common:Terms-Condition-Welcome")}
            </h2>
            <div className="font-sans leading-7">
              <p>{t("common:Terms-Condition-Welcome-Docs1")}</p>
              <p>{t("common:Terms-Condition-Welcome-Docs2")}</p>
            </div>
          </div>
          <div className="mb-6 lg:mb-12 last:mb-0">
            <h2 className="text-xl xl:text-2xl xl:leading-7 font-semibold font-serif mb-2 lg:mb-4">
              {t("common:Terms-Condition-Cookies")}
            </h2>
            <div className="font-sans leading-7">
              <p>{t("common:Terms-Condition-Cookies-Docs")}</p>
            </div>
          </div>
          <div className="mb-8 lg:mb-12 last:mb-0">
            <h2 className="text-xl xl:text-2xl xl:leading-7 font-semibold font-serif mb-2 lg:mb-4">
              {t("common:Terms-Condition-License")}
            </h2>
            <div className="font-sans leading-7">
              <p>{t("common:Terms-Condition-License-Docs")}</p>

              <ul>
                <strong className="mb-2"> {t("common:Terms-Condition-License-Docs0")}</strong>
                <li>{t("common:Terms-Condition-License-Docs1")}</li>
                <li>{t("common:Terms-Condition-License-Docs2")}</li>
                <li>{t("common:Terms-Condition-License-Docs3")}</li>
                <li>{t("common:Terms-Condition-License-Docs4")}</li>
                <li> {t("common:Terms-Condition-License-Docs5")}</li>
                <li>{t("common:Terms-Condition-License-Docs6")}</li>
                <li>{t("common:Terms-Condition-License-Docs7")}</li>
              </ul>
              <p>{t("common:Terms-Condition-License-Docs8")}</p>
            </div>
            <div className="my-6 lg:my-8 last:mb-0">
              <h2 className="text-xl xl:text-2xl xl:leading-7 font-semibold font-serif mb-2 lg:mb-4">
                {t("common:terms-condition-liability")}
              </h2>
              <div className="font-sans leading-7">
                <p>{t("common:Terms-Condition-Liability-Docs")}</p>
              </div>
            </div>
            <div className="my-6 lg:my-8 last:mb-0">
              <h2 className="text-xl xl:text-2xl xl:leading-7 font-semibold font-serif mb-2 lg:mb-4">
                {t("common:Terms-Condition-Privacy")}
              </h2>
              <div className="font-sans leading-7">
                <p>
                  {t("common:Terms-Condition-Privacy-Docs1")}
                  <Link href="/privacy-policy">
                    <a className="text-emerald-500"> {t("common:Terms-Condition-Privacy-Docs2")}</a>
                  </Link>
                </p>
              </div>
            </div>
            <div className="my-6 lg:my-8 last:mb-0">
              <h2 className="text-xl xl:text-2xl xl:leading-7 font-semibold font-serif mb-2 lg:mb-4">
                {t("common:Terms-Condition-Rights")}
              </h2>
              <div className="font-sans leading-7">
                <p>{t("common:Terms-Condition-rights-Docs")}</p>
              </div>
            </div>
            <div className="my-6 lg:my-8 last:mb-0">
              <h2 className="text-xl xl:text-2xl xl:leading-7 font-semibold font-serif mb-2 lg:mb-4">
                {t("common:Terms-Condition-Website")}
              </h2>
              <div className="font-sans leading-7">
                <p>{t("common:Terms-Condition-Website-Docs")}</p>
              </div>
            </div>
            <div className="my-6 lg:my-8 last:mb-0">
              <h2 className="text-xl xl:text-2xl xl:leading-7 font-semibold font-serif mb-2 lg:mb-4">
                {t("common:Terms-Condition-Disclaimer")}
              </h2>
              <div className="font-sans leading-7">
                <p>{t("common:Terms-Condition-Disclaimer-Docs")}</p>
                <ul>
                  <li>{t("common:Terms-Condition-Disclaimer-Docs1")}</li>
                  <li>{t("common:Terms-Condition-Disclaimer-Docs2")}</li>
                  <li>{t("common:Terms-Condition-Disclaimer-Docs3")}</li>
                  <li>{t("common:Terms-Condition-Disclaimer-Docs4")}</li>
                </ul>
                <p>{t("common:Terms-Condition-Disclaimer-Docs5")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TermAndConditions;
