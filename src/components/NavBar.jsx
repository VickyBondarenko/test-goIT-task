// import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavBar = () => {
  return (
    <Header className="">
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/tweets ">Tweets </StyledLink>
    </Header>
  );
};

const Header = styled.header`
  text-decoration: none;
  display: flex;
  width: 100%;
  height: 70px;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;
  box-shadow: 1px 1px 5px 2px gray;
`;

const StyledLink = styled(NavLink)`
  font-size: 36px;
  margin-right: 10px;
  padding: 4px;
  text-decoration: none;
  border-bottom: 3px solid;
  color: black;

  &.active {
    color: lightcoral;
  }
`;
