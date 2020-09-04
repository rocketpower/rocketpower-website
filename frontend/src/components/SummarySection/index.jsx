import React from 'react';
import styled from 'styled-components';
import Container from '../../Layout/Container';

const Section = styled.section`
  display: flex;
  background-color: ${props => props.theme.colors.primary};
  color: white;
  padding-top: 12rem;
  padding-bottom: 24rem;
`;

const Content = styled.p`
  width: 60%;
  align-self: center;
  font-size: 1.75rem;
  line-height: 1.5;
`;

const SummarySection = () => {
  return(
    <Section>
      <Container>
        <Content>
          Curabitur id est fermentum, porttitor eros et, vulputate orci. Integer sed lorem sed urna bibendum tincidunt et in eros. In hac habitasse platea dictumst. Sed nunc enim, imperdiet vel elit sed, tempor accumsan erat. Integer placerat tortor in odio fermentum ultrices. Suspendisse pharetra vehicula diam eget sodales. Etiam ipsum neque, commodo eu mollis a, feugiat at ligula.
        </Content>
      </Container>
    </Section>
  );
}

export default SummarySection;