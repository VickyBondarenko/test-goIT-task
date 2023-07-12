import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { NavBar } from "./NavBar";
import styled from "styled-components";

export const Layout = () => {
  return (
    <>
      <NavBar />
      <Main>
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
