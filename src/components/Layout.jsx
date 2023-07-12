import React, { Suspense } from "react";
import { Outlet, useLocation, Link } from "react-router-dom";
import { NavBar } from "./NavBar";
import styled from "styled-components";

export const Layout = () => {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? "/";

  return (
    <>
      <NavBar />
      <Main>
        <Link to={backLinkHref}>
          <Button>Go back</Button>
        </Link>

        <Suspense fallback={<h1>Loading</h1>}>
          <Outlet />
        </Suspense>
      </Main>
    </>
  );
};

const Main = styled.main`
  padding: 20px;
  text-decoration: none;
  box-sizing: border-box;
`;

const Button = styled.button`
  font-size: 16px;
  font-weight: bold;
  padding: 8px 16px;
  color: black;
  background-color: #d3d3d34c;
  border-radius: 4px;

  &:hover {
    color: lightcoral;
    box-shadow: 1px 1px 5px 2px gray;
    cursor: pointer;
  }
`;
