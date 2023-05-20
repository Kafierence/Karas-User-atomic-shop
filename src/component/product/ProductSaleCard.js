import React from 'react';
import { Box, Flex, HStack, Icon, Link, Progress, Text } from '@chakra-ui/react';
import dynamic from 'next/dynamic';
import { IoFlash } from 'react-icons/io5';
import NextLink from 'next/link';
import Image from 'next/image';
import { useCart } from "react-use-cart";
import useAddToCart from "@hooks/useAddToCart";
import { showingTranslateValue } from "@utils/translate";
import useAsync from "@hooks/useAsync";
import { notifyError } from '@utils/toast';
import useTranslation from 'next-translate/useTranslation';
import SettingServices from "@services/SettingServices";
const ProductSaleCard = ({ product, attributes }) => {
    const { items, addItem, updateItemQuantity, inCart } = useCart();
    const { handleIncreaseQuantity } = useAddToCart();
    const { lang, t } = useTranslation("ns1"); // default namespace (optional)

    const { data: globalSetting } = useAsync(SettingServices.getGlobalSetting);

    const currency = globalSetting?.default_currency || "$";

    // console.log('attributes in product cart',attributes)
    //Handle setting add item to cart
    const handleAddItem = (p) => {
        if (p.stock < 1) return notifyError("Insufficient stock!");

        if (p?.variants?.length > 0) {
            setModalOpen(!modalOpen);
            return;
        }
        const newItem = {
            ...p,
            title: showingTranslateValue(p?.title, lang),
            id: p._id,
            variant: p.prices,
            price: p.prices.price,
            originalPrice: product.prices?.originalPrice,
        };
        addItem(newItem);
    };
    // Handle Sold Product
    const handleSold = (sold, quantity) => {
        let process_sold = (Number(sold) / Number(quantity)) * 100;
        process_sold = parseInt(String(process_sold));
        return process_sold;
    };
    //Handle discount
    const handleDicountPrice = (price, discount) => {
        let price_now = Number(price) - Number(price) * (Number(discount) / 100);
        return price_now;
    };
    return (
        <>
            <Flex direction='column' border='1px solid gray.200' pb={4} px={4}>
                <Link as={NextLink} href={`/product/${product.slug}` || "#"} variant="unstyle">
                    <Box position="relative">
                        {product?.image[0] ? (
                            <Image
                                src={product.image[0]}
                                width={210}
                                height={210}
                                alt="product"
                                className="object-contain  transition duration-150 ease-linear transform group-hover:scale-105"
                            />
                        ) : (
                            <Image
                                src="https://res.cloudinary.com/ahossain/image/upload/v1655097002/placeholder_kvepfp.png"
                                width={210}
                                height={210}
                                alt="product"
                                className="object-cover transition duration-150 ease-linear transform group-hover:scale-105"
                            />
                        )}
                        <Box position="absolute" right={0} top={0} bg="green.200">
                            <Flex
                                width={{ lg: '2.5rem', md: '3.75rem', base: '4rem' }}
                                py={{ lg: 3, md: 5, base: 6 }}
                                alignItems="center"
                                flexDirection="column"
                                fontSize={{ lg: 'sm', base: 'lg' }}
                                gap={1}
                            >
                                <Icon as={IoFlash} color='yellow.200' height={4} width={4} />

                            </Flex>
                        </Box>
                    </Box>
                </Link>

                <Text>{showingTranslateValue(product?.title, lang)}
                    {/* {JSON.stringify(product)} */}</Text>
                <Progress
                    height={1.5}
                    variant="baseStyle"
                    value={Number(handleSold(product.sold, product.quantity))}
                />

            </Flex>

        </>
    )
}

export default dynamic(() => Promise.resolve(ProductSaleCard), { ssr: false });