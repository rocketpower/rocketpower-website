import React from 'react';
import styled from 'styled-components';

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

const Wrapper = styled.div`
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

export const SkillCard = (props) => {
  return(
    <Wrapper>
      <Image src={props.imgPath} />
      <Title>{props.title}</Title>
      <Subtitle>{props.subtitle}</Subtitle>
    </Wrapper>
  );
}