import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import { Launch } from '../../assets/images';

const Section = styled.section`
  display: flex;
  height: 100vh;
`;

const Content = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Background = styled.div`
  background-color: ${props => props.color ? props.color : props.theme.colors.primary};
  flex: 1 0 50%;
`;

const ContactSection = () => {
  return(
    <Section>
      <Content>
        <img src={Launch} alt="launch" />
        <Button />
      </Content>
      
      <Background />
      <Background color='#e6ecf8' />
    </Section>
  );
}

export default ContactSection;