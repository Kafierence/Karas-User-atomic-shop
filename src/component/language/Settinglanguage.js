import React from 'react'
import { notifyError } from "@utils/toast";
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useEffect } from 'react';
import SettingServices from "@services/SettingServices";
import NextLink from 'next/link';
import { Box, Link, useDisclosure } from '@chakra-ui/react';
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
    const { isOpen, onToggle, onClose } = useDisclosure();
    return (
        <>
            <Box className="dropdown">
                <Box
                    className={`flot-l flag ${currentLang?.flag?.toLowerCase()}`}
                ></Box>
                <button className="dropbtn">
                    {currentLang?.name}
                    &nbsp;<i className="fas fa-angle-down"></i>
                </button>
                <Box className="dropdown-content" p={4} gap={2}>
                    {data.map((language) =>
                    (
                        <>
                            {
                                language.status !== "hide" &&
                                <Link
                                    as={NextLink}
                                    key={language.iso_code}
                                    href="/"
                                    locale={`${language.iso_code}`}
                                >

                                    <Box _hover={{ color: 'red' }} cursor="pointer" py={2} onClick={() => setCurrentLang(language)}>
                                        <Box
                                            className={`flot-l flag ${language?.flag?.toLowerCase()}`} />

                                        {language?.name}
                                    </Box>
                                </Link>
                            }
                        </>
                    )
                    )}
                </Box>
            </Box>



        </>
    )
}

export default Settinglanguage