import React from 'react';
import Providers from './routes';

import {Provider as PaperProvider} from 'react-native-paper';

import {theme} from './core/theme';

const App = () => {
  return (
    <PaperProvider theme={theme}>
      <Providers />
    </PaperProvider>
  );
};
export default App;
