import React from 'react'
import { FacebookIcon, LinkedinIcon, TwitterIcon, TelegramIcon } from "react-share";
import useTranslation from "next-translate/useTranslation";
import GithubIcon from 'public/assets/icons/social/github.svg'
import { Box, HStack, Icon, Link } from '@chakra-ui/react';
import { FiGithub } from 'react-icons/fi';

const LinkSocial = () => {
    const { t } = useTranslation();
    const data = [
        {
            label: "Facebook Social",
            icon: <FacebookIcon size={34} round />,
            link: "https://www.facebook.com/profile.php?id=100019553707449"
        },
        {
            label: "Twitter Social",
            icon: <TwitterIcon size={34} round />,
            link: "https://twitter.com/VnNamTng183503"
        },
        {
            label: "Github Social",
            icon:
                <Box p={1} px={2} bg='#5C6BC0' color='white' borderRadius='full'>
                    <Icon as={FiGithub} borderRadius='full' sx={{
                        svg: {
                            height: 34,
                            width: 34
                        }
                    }} />
                </Box>,
            link: "https://github.com/Kafierence"
        },
        {
            label: "LinkedIn Social",
            icon: <LinkedinIcon size={34} round />,
            link: "https://www.linkedin.com/in/v%C4%83n-nam-t%E1%BB%91ng-2464b0243"
        },
        {
            label: "Telegram Social",
            icon: <TelegramIcon size={34} round />,
            link: "https://www.linkedin.com/in/v%C4%83n-nam-t%E1%BB%91ng-2464b0243"
        }
    ]
    return (


        <HStack spacing={2}>
            {React.Children.toArray(data.map(social => (
                <Link href={social.link} target='_blank'>
                    <Box
                        p={2}
                        borderRadius="full"
                        _hover={{
                            transition: 'ease-in-out 500ms',
                            opacity: 0.7

                        }}
                    >
                        {social.icon}
                    </Box>
                </Link>
            )))}

        </HStack>


    )
}

export default LinkSocial