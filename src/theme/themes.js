import {
  extendTheme,
} from '@chakra-ui/react';

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

export const backgrounds = {
  gradient: {
    g: {
      100: 'linear-gradient(90deg, #5BA2E7 0%, #2A7AD7 100%)',
      200: 'linear-gradient(90deg, #AADAFB 0%, #7DBEF3 100%)',
      300: 'linear-gradient(90deg, #3969A6 0%, #0E336B 100%)',
      400: 'linear-gradient(90deg, #9CC8F0 0%, #6499D2 100%)',
      500: ' linear-gradient(90deg, rgba(226, 232, 240, 0) 0%, #E2E8F0 54.17%, rgba(226, 232, 240, 0) 100%)',
      600: 'linear-gradient(135.57deg, #22C55E 14.93%, #5CDB8E 85.07%)',
      700: 'linear-gradient(135.57deg, #EF4444 14.93%, #FF6B67 85.07%)',
    },
  },
};
export const colors = {
  primary: {
    light: {
      100: '#AADAFB',
      200: '#7DBEF3',
      300: '#5BA2E7',
      400: '#2A7AD7',
    },
    dark: {
      100: '#9CC8F0',
      200: '#6499D2',
      300: '#3969A6',
      400: '#0E336B',
    },
  },
  secondary: {
    green: {
      100: '#AFFAC8',
      200: '#84F1B4;',
      300: '#63E4A8',
      400: '#34D399',
    },
    original: {
      100: '#34D399',
      200: '#22C55E',
      300: '#EF4444',
      400: '#F59E0B',
      500: '#6366F1',
    },
  },
  paragraph: {
    accent: {
      50: '#FAFAFA',
      100: '#F5F5F5',
      200: '#E5E5E5',
      300: '#D4D4D4',
      400: '#A3A3A3',
      500: '#737373',
      600: '#525252',
      700: '#404040',
      800: '#262626',
      900: '#171717',
    },
  },
  light: {
    accent: {
      // 100: 'white',
      200: '#F8FAFC',
      300: '#F1F5F9',
      400: '#E2E8F0',
      500: '#CBD5E1',
    },
  },
  dark: {
    accent: {
      100: '#94A3B8',
      200: '#64748B',
      300: '#475569',
      400: '#334155',
      500: '#2B3141',
      600: '#1E293B',
      700: '#151A26',
      800: '#111520',
      900: '#0D101A',
    },
  },
  custom: {
    dark: {
      100: '#2f3349',
      200: '#25293c',
      300: '#7367F0',
    },
  },
  ...backgrounds,
};

export const Link = {
  _hover: {
    textDecoration: 'none',
  },
  variants: {
    unstyle: {
      _hover: {
        textDecoration: 'none',

      },
    },

  },
};

export const Progress = {
  variants: {
    baseStyle: {
      track: {
        borderRadius: '0.1875rem',
        size: 'sm',
      },
      filledTrack: {
        bg: colors.secondary.original[200],
      },
    },
  },
  parts: [],
};

export const CardBox = {
  baseStyle: {
    width: '100%',
    height: '100%',
    padding: () => ({
      base: 6,
      md: 8,
    }),
  },
  variants: {
    shadow: (propss) => ({
      /*  bg: mode('white', 'dark.accent.800')(props), */
      border: '0.0625rem solid',
      /*     borderColor: mode('light.accent.400', 'dark.accent.300')(props), */
      borderRadius: '0.5rem',
      boxShadow: `0.0625rem 0.125rem 0.625rem rgba(15, 23, 42, 0.05)`,
      transition: 'all .3s ease',
      _hover: {
        boxShadow: '0 5px 24px rgb(7 59 116 / 15%)',
      },
    }),
  },

  defaultProps: {
    variant: 'shadow',
  },
};
const themes = extendTheme({
  config,
  colors,
  fonts: {
    body: `'DM-sans',sans-serif`,
  },
  components: {
    Progress,
    CardBox,
    Link

  },
});
export default themes;
///Setting Popover Have Z Index Higher than Modal
export const Popover = {
  baseStyle: {
    popper: {
      zIndex: 'popover',
    },
  },
};
