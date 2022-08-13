import {DefaultTheme, configureFonts} from 'react-native-paper';

import {width, height} from './dimensions';

const fontConfig = {
  android: {
    medium: {
      fontFamily: 'Poppins-Medium',
    },
    light: {
      fontFamily: 'Poppins-Light',
    },
    regular: {
      fontFamily: 'Poppins-Regular',
    },
    thin: {
      fontFamily: 'Poppins-Light',
    },
    bold: {
      fontFamily: 'Poppins-ExtraBold',
    },
    semiBold: {
      fontFamily: 'Poppins-SemiBold',
    },
  },
};

export const theme = {
  ...DefaultTheme,
  // roundness of common elements, such as buttons.
  roundness: 5,
  // dark: false,
  colors: {
    // primary color for your app, usually your brand color.
    primary: '#68a52c',

    // secondary color for your app which complements the primary color.
    accent: 'rgba(200, 200, 200, 0)',

    // background color for pages, such as lists.
    background: '#fff',

    // background color for elements containing content, such as cards.
    surface: '#fff',

    // text color for content.
    text: '#68a52c',

    //  color for disabled elements.
    // disabled: 'black',

    // color for placeholder text, such as input placeholder
    placeholder: '#68a52c',

    //  color for backdrops of various components such as modals.
    backdrop: '#ccc',

    // background color for snackbars
    onSurface: '#fff',

    // background color for badges
    notification: '#fff',

    // Supplement
    black: '#222',
    semiBlack: '#858181',
    facebook: '#0e8ef2',
    google: '#ea4335',
    error: '#772121',
    grey: '#ccc',
    success: '#297558',
    semiWhite: '#aaa',
    bar: '#1b7a59e0',
    white: '#fff',
    verified: '#1b7a59e0',
    lighterror: '#e31212',
    esewa: '#61bc47',

    premium: '#faaf40',
    free: '#297558',
    master: '#101920',
    admin: '#0a70b8',
  },
  fonts: configureFonts(fontConfig),

  size: {
    small: width == 'big' ? 12 : 10,
    regular: width == 'big' ? 14 : 12,
    medium: width == 'big' ? 16 : 14,
    extraMedium: width == 'big' ? 20 : 18,
    large: width == 'big' ? 25 : 22,
    extraLarge: width == 'big' ? 30 : 27,
  },
};
