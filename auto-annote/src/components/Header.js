import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <Container>
      <Logo>
        <Link to="/">
          <span>AutoAnnote</span>
        </Link>
      </Logo>

      <Nav>
      <NavLink to="/">
          <span>Home</span>
        </NavLink>
        <NavLink to="/projects">
          <span>Projects</span>
        </NavLink>
        <NavLink to="/contacts">
          <span>Contacts</span>
        </NavLink>
        <NavLink to="/about">
          <span>About</span>
        </NavLink>
        <NavLink to="/login">
          <span>Login</span>
        </NavLink>
        <NavLink to="/signup">
          <span>Sign Up</span>
        </NavLink>
      </Nav>
    </Container>
  );
}

export default Header;

const Container = styled.div`

  border: 1px solid #fff;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
  color: black;
  display: flex;
  flex-direction: row;
  height: 60px;
  width: 100%;
  position: relative;
`;

const Logo = styled.div`
  cursor: pointer;

  span {
    font-size: 20px;
    color: black;
    font-weight: 600;
    text-transform: uppercase;
    position: absolute;
    text-decoration: none;
    cursor: pointer;
    align-items: center;
    display: flex;
    margin-left: 60px;
    margin-top: 10px;
  }
`;

const Nav = styled.div`
  align-items: center;
  text-align: center;
  margin-top: 10px;
  display: flex;
  justify-content: center;
  color:black;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  align-items: center;
  color: black;

  span {
    font-size: 16px;
    color: black;
    font-weight: 400;
    text-transform: uppercase;
    position: relative;
    text-decoration: none;
    cursor: pointer;
    display: flex;
    margin-right: 0px;
    margin: 0px;
    align-items: center;
    justify-content: center;
    padding: 0px 20px;
    transition: color 0.5s ease-in-out;

    // &:after {
    //   content: "";
    //   height: 2px;
    //   position: absolute;
    //   left: 0;
    //   background: black;
    //   right: 0;
    //   bottom: 0px;
    //   opacity: 0;
    //   transform-origin: left center;
    //   transform: scaleX(0);
    //   transition: transform 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s,
    //     opacity 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    // }
  }

  &:hover {
    span {
      transform: scaleX(1);
      color:blue;
      opacity: 1;
    }
  }
  &:focus{
    span{
      color:blue;
    }
    

  }
`;
