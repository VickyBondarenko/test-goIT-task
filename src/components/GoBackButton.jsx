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
