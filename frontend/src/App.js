import React from 'react';
import { ThemeProvider } from 'styled-components';
import DefaultTheme from './styles/themes/DefaultTheme';
import FirstContent from './components/FirstContent';
import Summary from './components/Summary';
import Services from './components/Services';

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
