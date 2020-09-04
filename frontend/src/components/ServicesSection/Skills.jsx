import React from 'react';
import styled from 'styled-components';
import { CloudComputing, Design, RocketLaunch } from '../../../assets/images';

const Card = styled.div`
  flex-basis: 33%;
  padding: 5rem 2rem;

  &:not(:last-child) {
    border-right: 1px solid #E6ECF8;
  }

  @media screen and (max-width: 769px) {
    border-right: none !important;

    &:not(:last-child) {
      border-bottom: 1px solid #E6ECF8;
  }
`;

const Wrapper = styled.div`
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 5px 5px 0 rgba(233, 240, 243, 0.5), 0 0 0 1px #E6ECF8;
  display: flex;
  align-self: center;
  margin: 0 auto;
  max-width: 1200px;

  @media screen and (max-width: 769px) {
    flex-direction: column;
  }
`;

const Image = styled.img`
  height: 5rem;
`;

const Title = styled.h1`
  font-family: Mosk, sans-serif;
`;

const Subtitle = styled.h2`
  font-size: 1.2rem;
  font-weight: normal;
`;

const Skills = () => {
  return(
    <Wrapper>
      <Card>
        <Image src={Design} />
        <Title>Design</Title>
        <Subtitle>We value simple content structure, clean design patterns, and thoughtful interactions.</Subtitle>
      </Card>
      <Card>
        <Image src={CloudComputing} />
        <Title>Serve</Title>
        <Subtitle>Infraestructure is not your problem! We manage your projects' requirements using reliable cloud computing services.</Subtitle>
      </Card>
      <Card>
        <Image src={RocketLaunch} />
        <Title>Launch</Title>
        <Subtitle>You can launch your ideas with us! Our experiencie thinking and developing software can help you to definitely start your projects.</Subtitle>
      </Card>
    </Wrapper>
  );
}

export default Skills;