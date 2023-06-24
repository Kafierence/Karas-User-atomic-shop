import React, { useRef } from 'react'
import {
    Flex,
    HStack,
    Icon,
    Box,
    Button,
    Image,
    Divider,
    Center,
    Text,
} from '@chakra-ui/react';
import useTranslation from 'next-translate/useTranslation';
import { FiChevronRight } from 'react-icons/fi';
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import ProductSaleCard from '@component/product/ProductSaleCard';
const ListBrand = () => {
    const { t } = useTranslation();
    const brandsLogo = [
        {
            image: "https://klbtheme.com/shopwise/electronic/wp-content/uploads/2020/04/cl_logo2-4.png",
            label: "Logo Cl1"
        },
        {
            image: "https://klbtheme.com/shopwise/electronic/wp-content/uploads/2020/04/cl_logo3-4.png",
            label: "Logo Cl2"
        },
        {
            image: "https://klbtheme.com/shopwise/electronic/wp-content/uploads/2020/04/cl_logo3-4.png",
            label: "Logo Cl3"
        },
        {
            image: "https://klbtheme.com/shopwise/electronic/wp-content/uploads/2020/04/cl_logo4-4.png",
            label: "Logo Cl4"
        },
        {
            image: "https://klbtheme.com/shopwise/electronic/wp-content/uploads/2020/04/cl_logo2-4.png",
            label: "Logo Cl5"
        },
        {
            image: "https://klbtheme.com/shopwise/electronic/wp-content/uploads/2020/04/cl_logo3-4.png",
            label: "Logo Cl5"
        },
        {
            image: "https://klbtheme.com/shopwise/electronic/wp-content/uploads/2020/04/cl_logo3-4.png",
            label: "Logo Cl5"
        },
        {
            image: "https://klbtheme.com/shopwise/electronic/wp-content/uploads/2020/04/cl_logo4-4.png",
            label: "Logo Cl5"
        }
    ]
    const prevRef = useRef();
    const nextRef = useRef();
    //Setting Brand Logo 
    return (
        <>
            <Flex justifyContent="space-between">
                <Text textTransform="capitalize" fontSize='1.5rem' fontWeight='bold'>{t('common:Brands')}</Text>
                <HStack>
                    <Button ref={prevRef}>
                        <Icon
                            height={6}
                            width={6}
                            as={FiChevronRight}
                            transform="rotate(180deg)"
                        />
                    </Button>
                    <Button ref={nextRef}>
                        <Icon height={6} width={6} as={FiChevronRight} />
                    </Button>
                </HStack>
            </Flex>
            <Divider my={6} />
            <Box>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    onInit={(swiper) => {
                        swiper.params.navigation.prevEl = prevRef.current;
                        swiper.params.navigation.nextEl = nextRef.current;
                        swiper.navigation.init()
                        swiper.navigation.update();
                    }}
                    /*  navigation={{
                         prevEl: prevRef.current,
                         nextEl: nextRef.current,
                     }} */
                    modules={[Navigation]}
                    breakpoints={{
                        450: {
                            slidesPerView: 1,
                        },
                        630: {
                            slidesPerView: 2,
                        },
                        920: {
                            slidesPerView: 3,
                        },
                        1232: {
                            slidesPerView: 4,
                        },
                        1520: {
                            slidesPerView: 5,
                        },
                    }}
                >
                    <Box>
                        {brandsLogo.map((brand, i) => (
                            <SwiperSlide key={i}>
                                <Center>
                                    <Image
                                        src={brand.image}
                                        alt={brand.label || 'Image Brands'}
                                    />
                                </Center>
                            </SwiperSlide>
                        ))}
                    </Box>
                </Swiper>
            </Box>
        </>
    )
}

export default ListBrand