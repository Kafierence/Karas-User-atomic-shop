import React from 'react';

import { Box, Flex, HStack, Icon, Link, Progress, Text } from '@chakra-ui/react';
import dynamic from 'next/dynamic';
import { IoFlash } from 'react-icons/io5';
import NextLink from 'next/link';
import Image from 'next/image';
const ProductSaleCard = ({ product }) => {
    return (
        <>
            <Flex direction={'column'}>
                <Link as={NextLink} href={product.link} variant="unstyle">
                    <Box>
                        <Image src={product.image} alt="Product Image" />
                        <Box position="absolute" top={0} bg="secondary.200">
                            <Flex
                                width={{ lg: '2.5rem', md: '3.75rem', base: '4rem' }}
                                py={{ lg: 3, md: 5, base: 6 }}
                                alignItems="center"
                                flexDirection="column"
                                fontSize={{ lg: 'sm', base: 'lg' }}
                                gap={1}
                            >
                                <Icon as={IoFlash} />
                                <Text>{`-${product.discount}%`} </Text>
                            </Flex>
                        </Box>
                    </Box>
                </Link>
                <HStack>
                    <Text my={2} color="red.500" fontWeight="semibold">{`${t(
                        'common:CURRENCY'
                    )} ${handleDicountPrice(product.price, product.discount)}`}</Text>
                    <Text textDecoration="line-through" color="gray">
                        {`${t('common:CURRENCY')} ${product.price}`}
                    </Text>
                </HStack>

                <Progress
                    height={1.5}
                    variant="baseStyle"
                    value={Number(handleSold(product.sold, product.quantity))}
                />

                <Text fontSize="sm">{`${handleSold(
                    product.sold,
                    product.quantity
                )}% ${t('common:SOLD')}`}</Text>
            </Flex>

        </>
    )
}

export default dynamic(() => Promise.resolve(ProductSaleCard), { ssr: false });