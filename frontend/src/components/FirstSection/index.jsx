import React from 'react';
import styled from 'styled-components';
import { Header } from './Header';
import { Content } from './Content';

const Section = styled.section`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const FirstSection = () => {
  return(
    <Section>
      <Header />
      <Content />
    </Section>
  );
}

export default FirstSection;