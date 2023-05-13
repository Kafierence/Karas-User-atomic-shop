import React from 'react'
import { FlagIcon } from '@heroicons/react/outline'
import { Icon } from '@chakra-ui/react'
import dynamic from 'next/dynamic'
const ProductSaleCard = ({ product }) => {
    return (
        <>
            <Icon as={FlagIcon} />

        </>
    )
}

export default dynamic(() => Promise.resolve(ProductSaleCard), { ssr: false });