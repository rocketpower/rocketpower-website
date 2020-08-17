import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  margin: 0 auto;
  flex-grow: 1;
  
  flex-direction: ${props => {
    if (props.row) return 'row';
    return 'column';
  }};

  @media screen and (min-width: 1024px) { 
    max-width: 960px;
  }
  
  @media screen and (min-width: 1216px) { 
    max-width: 1152px;
  }
  
  @media screen and (min-width: 1408px) { 
    max-width: 1500px;
  }
`;

export default Container;