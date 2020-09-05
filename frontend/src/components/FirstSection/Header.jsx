import React from 'react';
import styled from 'styled-components';
import Container from '../Layout/Container';
import { Logo } from '../../assets/images';

const Nav = styled.nav`
  padding: 1rem 0;
`;

const NavItem = styled.a`
  padding: 0 0.75rem;
  align-self: center;
`;

const Menu = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: flex-end;
`;

const Header = () => {
  return(
    <Nav>
      <Container row>
        <NavItem href="/">
          <img src={Logo} alt="rocketpower logo" height="70px" />
        </NavItem>
        <Menu>
          <NavItem href="/">
            Contact
          </NavItem>
        </Menu>
      </Container>
    </Nav>
  );
}

export default Header;