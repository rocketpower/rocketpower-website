import React from 'react';
import { ThemeProvider } from 'styled-components';
import { FirstContent } from './components/FirstContent/FirstContent';
import DefaultTheme from './styles/themes/DefaultTheme';

const App = () => {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <FirstContent />
    </ThemeProvider>
  );
}

export default App;
