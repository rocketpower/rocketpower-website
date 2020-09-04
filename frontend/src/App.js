import React from 'react';
import { ThemeProvider } from 'styled-components';
import DefaultTheme from './styles/themes/DefaultTheme';
import FirstSection from './components/Sections/First';
import SummarySection from './components/Sections/Summary';
import ServicesSection from './components/Sections/Services';

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
