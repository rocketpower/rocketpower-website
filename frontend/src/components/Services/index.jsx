import React from 'react';
import styled from 'styled-components';
import Container from '../Layout/Container';
import { SkillCard } from './SkillCard';

const Section = styled.section`
  min-height: 100vh;
  margin-top: -13rem;
`;

const Box = styled.div`
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

const Services = () => {
  return(
    <Section>
      <Container>
        <Box>
          <SkillCard 
            imgPath="design.svg"
            title="Design"
            subtitle="We value simple content structure, clean design patterns, and thoughtful interactions."
          />
          <SkillCard 
            imgPath="cloud-computing.svg"
            title="Serve"
            subtitle="Infraestructure is not your problem! We manage your projects' requirements using reliable cloud computing services."
          />
          <SkillCard 
            imgPath="rocket-launch.svg"
            title="Launch"
            subtitle="You can launch your ideas with us! Our experiencie thinking and developing software can help you to definitely start your projects."
          />
        </Box>
      </Container>
    </Section>
  );
}

export default Services;