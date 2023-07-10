import React from 'react'
import { SidebarContext } from "@context/SidebarContext";
import useAsync from "@hooks/useAsync";
import CategoryServices from "@services/CategoryServices";
import useTranslation from "next-translate/useTranslation";
import { useContext } from "react";
import { showingTranslateValue } from "@utils/translate";
import { Box, Text } from "@chakra-ui/react";
import Image from "next/image";
import { useRouter } from "next/router";
const BrowseCategory = () => {
    const router = useRouter();
    const { lang } = useTranslation("ns1"); // default namespace (optional)
    const { isLoading, setIsLoading } = useContext(SidebarContext);

    const { data, loading, error } = useAsync(
        CategoryServices.getShowingCategory
    );

    return (
        <>
            {error ? (
                <Box display={'flex'} justifyContent={'center'} alignItems={'center'} margin={'auto'} >
                    <Text color='red'>{error}</Text>
                </Box>
            ) : (
                <>

                </>
            )}
        </>
    )
}

export default BrowseCategory