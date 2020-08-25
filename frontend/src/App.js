import React from 'react';
import { ThemeProvider } from 'styled-components';
import { FirstContent } from './components/FirstContent/FirstContent';
import { Summary } from './components/Summary/Summary';
import { Services } from './components/Services/Services';
import DefaultTheme from './styles/themes/DefaultTheme';

const App = () => {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <FirstContent />
      <Summary />
      <Services />
    </ThemeProvider>
  );
}

export default App;
