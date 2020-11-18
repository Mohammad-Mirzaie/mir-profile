import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Nav = () => {
  return (
    <StyledNav>
      <h1>
        <NavLink id="logo" to="/">
          Mohammad Mirzaie (MiR)
        </NavLink>
      </h1>
      <ul>
        <li>
          <NavLink to="/" activeClassName="selected" exact>
            About Me
          </NavLink>
        </li>
        <li>
          <NavLink to="/work" activeClassName="selected" exact>
            My Work
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" activeClassName="selected" exact>
            Contact Me
          </NavLink>
        </li>
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  min-height: 10vh;
  background: #282828;
  padding: 0rem 10rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  a {
    color: white;
    text-decoration: none;
  }
  #logo {
    font-size: 1.5rem;
    font-family: "Lobster", cursive;
    font-weight: lighter;
  }

  ul {
    display: flex;
    list-style: none;
  }
  li {
    padding-left: 3rem;
    position: relative;
  }
  .selected {
    padding-bottom: 1rem;
    border-bottom: #23d997 solid 0.3rem;
  }
`;

export default Nav;
