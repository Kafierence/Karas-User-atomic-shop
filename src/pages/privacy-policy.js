import React from "react";
import useTranslation from "next-translate/useTranslation";
//internal import
import Layout from "@layout/Layout";
import PageHeader from "@component/header/PageHeader";

const PrivacyPolicy = () => {
  const { t } = useTranslation();
  return (
    <Layout title="Privacy Policy" description="This is privacy policy page">
      <PageHeader title="Privacy-Policy" />
      <div className="bg-white">
        <div className="max-w-screen-2xl mx-auto lg:py-20 py-10 px-4 sm:px-10">
          <div className="mb-8 lg:mb-12 last:mb-0">
            <h2 className="text-xl xl:text-2xl xl:leading-7 font-semibold font-serif mb-2 lg:mb-4">
              {t("common:Privacy-Policy-Update-Date")}
            </h2>
            <div className="font-sans leading-7">
              <p>{t("common:Privacy-Policy-Update-Date-Docs1")}</p>
              <p>{t("common:Privacy-Policy-Update-Date-Docs2")}</p>
            </div>
          </div>
          <div className="mb-8 lg:mb-12 last:mb-0">
            <h2 className="text-xl xl:text-2xl xl:leading-7 font-semibold font-serif mb-2 lg:mb-4">
              {t("common:Privacy-Policy-Consent")}
            </h2>
            <div className="font-sans leading-7">
              <p>{t("common:Privacy-Policy-Consent-Docs")}</p>
            </div>
          </div>
          <div className="mb-8 lg:mb-12 last:mb-0">
            <h2 className="text-xl xl:text-2xl xl:leading-7 font-semibold font-serif mb-2 lg:mb-4">
              {t("common:Privacy-Policy-Information")}
            </h2>
            <div className="font-sans leading-7">
              <p>{t("common:Privacy-Policy-Information-Docs1")}</p>
              <p>{t("common:Privacy-Policy-Information-Docs2")}</p>
            </div>
          </div>
          <div className="mb-8 lg:mb-12 last:mb-0">
            <h2 className="text-xl xl:text-2xl xl:leading-7 font-semibold font-serif mb-2 lg:mb-4">
              {t("common:Privacy-Policy-Use-Information")}
            </h2>
            <div className="font-sans leading-7">
              <p>{t("common:Privacy-Policy-Use-Information-Docs")}</p>

              <ol>
                <li>{t("common:Privacy-Policy-Use-Information-Docs1")}</li>
                <li>{t("common:Privacy-Policy-Use-Information-Docs2")}</li>
                <li>{t("common:Privacy-Policy-Use-Information-Docs3")}</li>
                <li>{t("common:Privacy-Policy-Use-Information-Docs4")}</li>
                <li>{t("common:Privacy-Policy-Use-Information-Docs5")}</li>
                <li>{t("common:Privacy-Policy-Use-Information-Docs6")}</li>
                <li>{t("common:Privacy-Policy-Use-Information-Docs7")}</li>
              </ol>
            </div>
          </div>
          <div className="mb-8 lg:mb-12 last:mb-0">
            <h2 className="text-xl xl:text-2xl xl:leading-7 font-semibold font-serif mb-2 lg:mb-4">
              {t("common:Privacy-Policy-Log-File")}
            </h2>
            <div className="font-sans leading-7">
              <p>{t("common:Privacy-Policy-Log-File-Docs")}</p>
            </div>
          </div>
          <div className="mb-8 lg:mb-12 last:mb-0">
            <h2 className="text-xl xl:text-2xl xl:leading-7 font-semibold font-serif mb-2 lg:mb-4">
              {t("common:Privacy-Policy-Advertising")}
            </h2>
            <div className="font-sans leading-7">
              <p>{t("common:Privacy-Policy-Advertising-Docs")}</p>
            </div>
          </div>
          <div className="mb-8 lg:mb-12 last:mb-0">
            <h2 className="text-xl xl:text-2xl xl:leading-7 font-semibold font-serif mb-2 lg:mb-4">
              {t("common:Privacy-Policy-Third-Party")}
            </h2>
            <div className="font-sans leading-7">
              <p>{t("common:Privacy-Policy-Third-Party-Docs1")}</p>
              <p>{t("common:Privacy-Policy-Third-Party-Docs2")}</p>
            </div>
          </div>
          <div className="mb-8 lg:mb-12 last:mb-0">
            <h2 className="text-xl xl:text-2xl xl:leading-7 font-semibold font-serif mb-2 lg:mb-4">
              {t("common:Privacy-Policy-Ccpa-Rights")}
            </h2>
            <div className="font-sans leading-7">
              <p>{t("common:Privacy-Policy-Ccpa-Rights-Docs")}</p>
            </div>
          </div>
          <div className="mb-8 lg:mb-12 last:mb-0">
            <h2 className="text-xl xl:text-2xl xl:leading-7 font-semibold font-serif mb-2 lg:mb-4">
              {t("common:Privacy-Policy-Children-Information")}
            </h2>
            <div className="font-sans leading-7">
              <p>{t("common:Privacy-Policy-Children-Information-Docs1")}</p>
              <p>{t("common:Privacy-Policy-Children-Information-Docs2")}</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PrivacyPolicy;
