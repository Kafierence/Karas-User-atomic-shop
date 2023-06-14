import React, { useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import useTranslation from "next-translate/useTranslation";
import LinkPrimary from "@component/variants/LinkPrimary";
//internal import
import { UserContext } from "@context/UserContext";
import LinkSocial from "@component/social/LinkSocial";

const Footer = () => {
  const { t } = useTranslation();
  const {
    state: { userInfo },
  } = useContext(UserContext);
  const profileInfo = [
    {
      label: t('common:About-Us'),
      link: "/about-us"
    },
    {
      label: t('common:Contact-Us'),
      link: "/contact-us"
    },
    {
      label: t('common:Size-Guide'),
      link: "/side-guide"
    },
    {
      label: t('common:Privacy-policy'),
      link: "/privacy"
    },
    {
      label: t('common:FAQ'),
      link: "/faq"
    }
  ]
  const topCagories = [
    {
      label: t("common:Pet-Care"),
      link: "/search?Category=laptop",
    },
    {
      label: t("common:Beauty-$-Health"),
      link: "/search?Category=tablet",
    },
    {
      label: t("common:SMART_DEVICES"),
      link: "/search?Category=smart-devices",
    },
    {
      label: t("common:Curve"),
      link: "/search?Category=curve",
    }
  ]

  const accountService = [

    {
      label: t("common:Dashboard"),
      link: "/user/dashboard",
    },
    {
      label: t("common:My-Orders"),
      link: "/user/my-orders",
    },
    {
      label: t("common:Recent-Orders"),
      link: "/search?Category=smart-devices",
    },
    {
      label: t("common:Update-Profile"),
      link: "/user/update-profile",
    }

  ]
  return (
    <div className="pb-16 lg:pb-0 xl:pb-0 bg-white">
      <div className="mx-auto max-w-screen-2xl px-4 sm:px-10">
        <div className="grid grid-cols-2 md:grid-cols-7 xl:grid-cols-12 gap-5 sm:gap-9 lg:gap-11 xl:gap-7 py-10 lg:py-16 justify-between">
          <div className="pb-3.5 sm:pb-0 col-span-1 md:col-span-2 lg:col-span-3">
            <h3 className="text-md lg:leading-7 font-semibold mb-4 sm:mb-5 lg:mb-6 pb-0.5">
              {t("common:footer-menu-title")}
            </h3>
            <ul className="text-sm flex flex-col space-y-3">
              {profileInfo.map((item => (
                <li className="flex items-baseline" key={item.label}>
                  <LinkPrimary title={item.label} link={item.link} />
                </li>
              )))}
            </ul>
          </div>
          <div className="pb-3.5 sm:pb-0 col-span-1 md:col-span-2 lg:col-span-3">
            <h3 className="text-md lg:leading-7 font-semibold mb-4 sm:mb-5 lg:mb-6 pb-0.5">
              {t("common:Footer-Top-Category")}
            </h3>
            <ul className="text-sm lg:text-15px flex flex-col space-y-3">
              {topCagories.map(item => (
                <li className="flex items-baseline" key={item.label}>
                  <LinkPrimary title={item.label} link={item.LinkPrimary || "#"} />
                </li>
              ))}



            </ul>
          </div>
          <div className="pb-3.5 sm:pb-0 col-span-1 md:col-span-2 lg:col-span-3">
            <h3 className="text-md lg:leading-7 font-semibold mb-4 sm:mb-5 lg:mb-6 pb-0.5">
              {t("common:Footer-My-Account-Title")}
            </h3>
            <ul className="text-sm lg:text-15px flex flex-col space-y-3">
              {
                accountService.map(item => (
                  <li className="flex items-baseline" key={item.label}>

                    <LinkPrimary link={`${userInfo?.email ? item.link : "#"}`} title={item.label}>
                      <a className="text-gray-600 inline-block w-full hover:text-emerald-500">
                        {t("common:Footer-My-Account-Dashboard")}
                      </a>
                    </LinkPrimary>
                  </li>
                ))
              }


            </ul>
          </div>
          <div className="pb-3.5 sm:pb-0 col-span-1 md:col-span-2 lg:col-span-3">
            <Link href="/">
              <a className="mr-3 lg:mr-12 xl:mr-12" rel="noreferrer">
                Logo Soon
              </a>
            </Link>
            <p className="leading-7 font-sans text-sm text-gray-600 mt-3">
              <span>{t("common:Owner-Address")}</span>
              <br />
              <span>{t("common:Owner-Number")}</span>
              <br />
              <span>{t("common:Owner-EMail")}</span>
            </p>
          </div>
        </div>

        <hr className="hr-line"></hr>

        <div className="mx-auto max-w-screen-2xl px-4 sm:px-10 bg-gray-50 shadow-sm border border-gray-50 rounded-lg">
          <div className="grid grid-cols-2 gap-5 sm:gap-9 lg:gap-11 xl:gap-7 py-8 items-center justify-between">
            <div className="col-span-1">
              <span className="text-base leading-7 font-medium block mb-2 pb-0.5">
                {t("common:Follow-Me")}

              </span>
              <LinkSocial />
            </div>

            <div className="col-span-1 hidden lg:block md:block">
              <ul className="lg:text-right">
                <li className="px-1 mb-2 md:mb-0 transition hover:opacity-80 inline-flex">
                  <Image
                    width={274}
                    height={85}
                    className="w-full"
                    src="/payment-method/payment-logo.png"
                    alt="payment method"
                  />

                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
};

export default dynamic(() => Promise.resolve(Footer), { ssr: false });
