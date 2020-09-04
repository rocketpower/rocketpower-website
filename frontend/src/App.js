import React from 'react';
import { ThemeProvider } from 'styled-components';
import DefaultTheme from './styles/themes/DefaultTheme';
import FirstSection from './components/FirstSection';
import SummarySection from './components/SummarySection';
import ServicesSection from './components/ServicesSection';

const App = () => {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <FirstSection />
      <SummarySection />
      <ServicesSection />
    </ThemeProvider>
  );
}

export default App;
