import React from 'react';
import styled from 'styled-components';
import Container from '../Layout/Container';
import Skills from './Skills';
import Technologies from './Technologies'

const Section = styled.section`
  margin-top: -13rem;
`;

const Services = () => {
  return(
    <Section>
      <Container>
        <Skills />
        <Technologies />
      </Container>
    </Section>
  );
}

export default Services;