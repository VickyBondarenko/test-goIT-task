import PropTypes from "prop-types";
import styled from "styled-components";
import { forwardRef } from "react";

const LoadMoreButton = forwardRef(({ onHandleClick }, ref) => {
  return (
    <LoadMoreBtn ref={ref} onClick={onHandleClick}>
      Load more
    </LoadMoreBtn>
  );
});

LoadMoreButton.displayName = "LoadMoreButton";

LoadMoreButton.propTypes = {
  onHandleClick: PropTypes.func.isRequired,
};

const LoadMoreBtn = styled.button`
  display: block;
  width: 196px;
  height: 50px;
  padding: 14px 28px;
  margin: 40px auto 5px;
  border-radius: 10.311px;
  border: 1px solid #5736a3;

  background-color: #ebd8ff;
  box-shadow: 0px 3.4369285106658936px 3.4369285106658936px 0px
    rgba(0, 0, 0, 0.25);
  text-align: center;
  color: var(--landing-button-text-color, #373737);
  font-family: Montserrat;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-transform: uppercase;

  cursor: pointer;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background-color: #5cd3a8;
    color: #373737;
  }
`;
export default LoadMoreButton;
