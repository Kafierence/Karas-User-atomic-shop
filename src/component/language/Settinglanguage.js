import React from 'react'
import { notifyError } from "@utils/toast";
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useEffect } from 'react';
import SettingServices from "@services/SettingServices";
import Link from 'next/link';
import { Box } from '@chakra-ui/react';
const Settinglanguage = () => {
    const { t } = useTranslation();
    const router = useRouter();
    const { locale } = router;
    const [data, setData] = useState([]);
    const [currentLang, setCurrentLang] = useState({});
    useEffect(() => {
        (async () => {
            try {
                const res = await SettingServices.getAllLanguages();
                setData(res);
                const result = res?.find((lang) => lang?.iso_code === locale);
                setCurrentLang(result);

            } catch (err) {
                notifyError(err);
                // console.log("error on getting lang", err);
            }
        })();
    }, []);
    return (
        <>
            <div className="dropdown ">
                <div
                    className={`flot-l flag ${currentLang?.flag?.toLowerCase()}`}
                ></div>
                <button className="dropbtn">
                    {currentLang?.name}
                    &nbsp;<i className="fas fa-angle-down"></i>
                </button>
                <div className="dropdown-content">
                    {data.map((language) =>
                    (
                        <>
                            {
                                language.status !== "hide" &&
                                <Link
                                    key={language.iso_code}
                                    href="/"
                                    locale={`${language.iso_code}`}
                                >

                                    <Box onClick={() => setCurrentLang(language)}>
                                        <Box
                                            className={`flot-l flag ${language?.flag?.toLowerCase()}`} />

                                        {language?.name}
                                    </Box>
                                </Link>
                            }
                        </>
                    )
                    )}
                </div>
            </div>



        </>
    )
}

export default Settinglanguage