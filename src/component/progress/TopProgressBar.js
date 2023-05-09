import { Box } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import NProgress from 'nprogress';
import React, { useEffect } from 'react';

const TopProgressBar = () => {
  const router = useRouter();

  useEffect(() => {
    NProgress.configure({
      showSpinner: false,
      easing: 'linear',
      speed: 500,
      trickleSpeed: 500,
      parent: '#progress-navigation',
    });
    console.log('Run Event Progress');
    const handleRouteStart = () => NProgress.start();
    const handleRouteDone = () => NProgress.done();

    router.events.on('routeChangeStart', handleRouteStart);
    router.events.on('routeChangeComplete', handleRouteDone);
    router.events.on('routeChangeError', handleRouteDone);

    return () => {
      router.events.off('routeChangeStart', handleRouteStart);
      router.events.off('routeChangeComplete', handleRouteDone);
      router.events.off('routeChangeError', handleRouteDone);
    };
  }, [router]);

  return (
    <Box
      sx={{
        '#nprogress': {
          '& .bar': {
            bg: 'gradient.g.100',
            height: 1.5,
          },
          '& .peg': {
            boxShadow: 'unset',
          },
        },
      }}
      id="progress-navigation"
      position="fixed"
      width="100%"
      height={1.5}
      zIndex="banner"
    />
  );
};

export default TopProgressBar;
