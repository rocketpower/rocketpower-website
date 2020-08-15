import React from 'react';
import styled from 'styled-components'

const Nav = styled.nav`
  padding: 1.2rem 0;
`;

const Container = styled.div`
  display: flex;
  margin: 0 auto;

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

const Logo = styled.a`
  padding: 0 0.75rem;
`;

const Menu = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: flex-end;
`;

export const Header = () => {
  return(
    <Nav>
      <Container>
        <Logo href="/">
          <img src="planet.png" alt="rocketpower logo" />
        </Logo>
        <Menu>
          <button>
            Contact
          </button>
        </Menu>
      </Container>
    </Nav>
  );
}