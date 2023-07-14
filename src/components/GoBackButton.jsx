import { useLocation, Link } from "react-router-dom";
import styled from "styled-components";

export const GoBackButton = () => {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? "/";

  return (
    <>
      <Link to={backLinkHref}>
        <Button>Go back</Button>
      </Link>
    </>
  );
};

const Button = styled.button`
  height: 40px;

  padding: 9px 16px;
  color: black;
  background-color: #ebd8ff;
  border-radius: 20px;
  border: 1px solid #4b2a99;
  font-family: Montserrat;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-transform: uppercase;

  &:hover {
    background: #5cd3a8;
    border-color: transparent;
    box-shadow: 0px 3.4369285106658936px 3.4369285106658936px 0px
      rgba(0, 0, 0, 0.25);
    cursor: pointer;
  }
`;
