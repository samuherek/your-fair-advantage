import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

const Header = styled.header`
  width: 100%;
`;

const Container = styled.div`
  max-width: ${props => props.theme.sizes.maxWidth};
  margin: 0 auto;
  display: flex;
`;

const Logo = styled.div`
  padding: 1.5rem 1.5rem;
  font-family: ${props => props.theme.fonts.strong};
  font-weight: 900;

  a {
    text-decoration: none;
    color: ${props => props.theme.colors.base};
  }
`;

const Nav = styled.nav`
  margin-left: auto;
  padding: 1.5rem 1.5rem;

  ul {
    display: flex;
    justify-content: space-between;
  }

  li {
    display: inline-block;
    margin-left: 1em;
    &:first-child {
      position: relative;
      margin: 0;
      flex-basis: 100%;
    }
  }

  a {
    text-decoration: none;
    color: DarkGray;
    font-weight: 600;
    transition: all 0.2s;
    border-bottom: 2px solid ${props => props.theme.colors.base};
    &:hover {
      color: white;
    }
  }
`;

const activeLinkStyle = {
  // color: 'white'
};

const Menu = () => {
  return (
    <Header>
      <Container>
        <Logo>
          <Link to="/" exact activeStyle={activeLinkStyle}>
            YourFairAdvantage
          </Link>
        </Logo>
        <Nav>
          <ul>
            <li>
              <Link to="/about/" activeStyle={activeLinkStyle}>
                About
              </Link>
            </li>
            {/* <li>
              <Link to="/contact/" activeStyle={activeLinkStyle}>
                Contact
              </Link>
            </li> */}
          </ul>
        </Nav>
      </Container>
    </Header>
  );
};

export default Menu;
