import { Link, Text } from '@chakra-ui/react'
import React from 'react'

const LinkPrimary = ({ title, link }) => {
    return (
        <Link href={link} variant='unstyle'>
            <Text
                position={'relative'}
                _hover={{
                    _after: {
                        width: '100%',
                        opacity: 1,
                        left: 0,
                    },
                }}
                _after={{
                    content: "''",
                    height: '2px',
                    width: 0,
                    backgroundColor: 'black',
                    position: 'absolute',
                    bottom: '-2px',
                    right: 0,
                    opacity: 0,
                    transition: '.5s',
                }}
            >
                {title}
            </Text>
        </Link>
    )
}

export default LinkPrimary