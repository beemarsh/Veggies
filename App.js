import React from 'react';
import Providers from './routes';

import {Provider as PaperProvider} from 'react-native-paper';
import FlashMessage from 'react-native-flash-message';

import {theme} from './core/theme';

const App = () => {
  return (
    <PaperProvider theme={theme}>
      <Providers />
      <FlashMessage
        position="bottom"
        style={{
          height: 25,
          paddingVertical: 0,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        titleStyle={{
          fontSize: theme.size.small + 1,
          color: theme.colors.white,
          ...theme.fonts.medium,
        }}
      />
    </PaperProvider>
  );
};
export default App;
