import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { NavBar } from "./NavBar";
import styled from "styled-components";

export const Layout = () => {
  return (
    <>
      <Header />
      <Main>
        <Suspense fallback={<h1>Loading</h1>}>
          <Outlet />
        </Suspense>
      </Main>
    </>
  );
};

const Header = styled(NavBar)`
  position: fixed;
  top: 0;
  left: 0;
  height: 80px;
  z-index: 999;
`;

const Main = styled.main`
  padding: 20px 0 20px 20px;
  text-decoration: none;
  box-sizing: border-box;
  height: calc(100vh - 80px);
  overflow-y: hidden;
`;
