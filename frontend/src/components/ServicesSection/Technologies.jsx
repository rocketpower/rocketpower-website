import React from 'react';
import styled from 'styled-components';
import { Javascript, Html5, Css3, Reactjs, Angular, Sass, Python, Node, DotnetCore, Aws } from '../../assets/images';

const Wrapper = styled.div`
  display: flex;
  padding: 7rem 0;
  justify-content: center;
  flex-wrap: wrap;
`;

const Item = styled.img`
  height: 9rem;
  margin-bottom: 5rem;
  flex: 1 0 26%;
`;

const Technologies = () => {
  return(
    <Wrapper>
      <Item src={Javascript} alt="javascript" />
      <Item src={Html5} alt="html5" />
      <Item src={Css3} alt="css3" />
      <Item src={Reactjs} alt="react" />
      <Item src={Angular} alt="angular" />
      <Item src={Sass} alt="sass" />
      <Item src={Python} alt="python" />
      <Item src={Node} alt="node" />
      <Item src={DotnetCore} alt=".net core" />
      <Item src={Aws} alt="amazon web services" />
    </Wrapper>
  );
}

export default Technologies;