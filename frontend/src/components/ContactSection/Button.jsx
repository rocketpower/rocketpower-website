import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  font-family: Mosk, sans-serif;
  color: white;
  background-color: #c9646d;
  font-size: 4rem;
  align-self: center;
  padding: 1rem 2rem;
  border-radius: 60px;
  box-shadow:
  0 2.8px 2.2px rgba(0, 0, 0, 0.034),
  0 6.7px 5.3px rgba(0, 0, 0, 0.048),
  0 12.5px 10px rgba(0, 0, 0, 0.06),
  0 22.3px 17.9px rgba(0, 0, 0, 0.072),
  0 41.8px 33.4px rgba(0, 0, 0, 0.086),
  0 100px 80px rgba(0, 0, 0, 0.12);

  &:hover{
    cursor: pointer;
    transform: translateY(2px);
  }

  &:active {
    background-color: #ff6f8a;
  }
`;

const Button = () => {
  return(
    <Title>Start with us!</Title>
  );
}

export default Button;