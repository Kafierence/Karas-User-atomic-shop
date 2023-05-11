import { Box, Menu, MenuButton, MenuDivider, MenuItem, MenuList, Text, useDisclosure } from '@chakra-ui/react'
import useTranslation from 'next-translate/useTranslation'
import React from 'react'
import { UserContext } from "@context/UserContext";
import { useContext } from 'react';
import { useEffect } from 'react';
import Link from 'next/link';
import { useState } from 'react';
import Cookies from 'js-cookie';
import { RiDashboardFill } from "react-icons/ri"
import { useRouter } from 'next/router';
const ProfileDropdown = () => {
    const { t } = useTranslation()
    const { isOpen, onOpen } = useDisclosure();
    //Setting iamge url from cookie
    const [imageUrl, setImageUrl] = useState("");
    const {
        dispatch,
        state: { userInfo },
    } = useContext(UserContext);
    const router = useRouter();
    useEffect(() => {
        if (Cookies.get("userInfo")) {
            const user = JSON.parse(Cookies.get("userInfo"));
            setImageUrl(user.image);
        }
    }, []);
    const handleLogOut = () => {
        dispatch({ type: "USER_LOGOUT" });
        Cookies.remove("userInfo");
        Cookies.remove("couponInfo");
        router.push("/");
    };
    const data = [
        {
            label: t('common:DASHBOARD'),
            link: "/user/dashboard",

        },
        {
            label: t("common:MY_ORDERS"),
            link: "/user/my-orders",
        },
        {
            label: t("common:UPDATE_PROFILE"),
            link: "/user/update-profile"
        }
    ]
    return (
        <>
            <Menu>
                <MenuButton name="User Name" cursor="pointer" transition='all 0.2s'>
                    {
                        userInfo.image || imageUrl ?
                            (
                                <Link href="/user/dashboard">
                                    <a className="relative top-1 w-6 h-6">
                                        <Image
                                            width={29}
                                            height={29}
                                            src={imageUrl || userInfo?.image}
                                            alt="user"
                                            className="bg-white rounded-full"
                                        />
                                    </a>
                                </Link >
                            ) : (
                                <Link href="/user/dashboard">
                                    <Box borderRadius='full' border='1px solid' height='32px' width='32px'>
                                        {userInfo?.name[0]}
                                    </Box>
                                </Link>
                            )


                    }
                </MenuButton>

                <MenuList zIndex={5} color='black' fontSize='sm' fontWeight='normal'>
                    {React.Children.toArray(
                        data.map(data => (
                            <>
                                <MenuItem>
                                    <Link href={data.link}>
                                        <Text px={5} py={2}>
                                            {data.label}
                                        </Text>
                                    </Link>
                                </MenuItem>
                            </>
                        ))
                    )}



                    <MenuDivider />

                    <MenuItem px="20px" onClick={() => handleLogOut()}>
                        {t('common:SIGN_OUT')}
                    </MenuItem>
                </MenuList>
            </Menu>




        </>
    )
}

export default ProfileDropdown