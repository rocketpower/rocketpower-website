import React from 'react';
import styled from 'styled-components';
import Container from '../Layout/Container';
import { Planet } from '../../assets/images';

const Headline = styled.div`
  margin-top: 2rem;
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

const PlanetContainer = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`;

export const Content = () => {
  return(
    <Container>
      <Headline>
        <Title>Lorem ipsum dolor sit amet</Title>
        <Subtitle>Sed ut perspiciatis unde omnis iste natus error sit voluptatem et quasi architecto beatae vitae dicta sunt explicabo.</Subtitle>
      </Headline>
      <PlanetContainer>
        <img src={Planet} alt="logo" />
      </PlanetContainer>
    </Container>
  );
}