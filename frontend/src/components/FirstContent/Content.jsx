import React from 'react';
import styled from 'styled-components';
import Container from '../Layout/Container';

const Headline = styled.div`
  margin-top: 7.5rem;
  font-family: Mosk, sans-serif;
`;

const Title = styled.h1`
  font-size: 5.25rem;
  margin-top: 0;
  margin-bottom: 1.5rem;
`;

const Subtitle = styled.h2`
  color: #a9a9a9;
  margin-top: 0;
  margin-bottom: 1.5rem;
`;

const Planet = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = () => {
  return(
    <Container>
      <Headline>
        <Title>Lorem ipsum dolor sit amet</Title>
        <Subtitle>Sed ut perspiciatis unde omnis iste natus error sit voluptatem et quasi architecto beatae vitae dicta sunt explicabo.</Subtitle>
      </Headline>
      <Planet>
        <img src="../logo.png" alt="planet" />
      </Planet>
    </Container>
  );
}