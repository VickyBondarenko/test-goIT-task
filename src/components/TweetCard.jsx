// import React, { Suspense } from "react";
// import { Outlet, useLocation, Link } from "react-router-dom";
// import { NavBar } from "./NavBar";
import styled from "styled-components";
import TweetImage from "../assets/img/picture2 1.png";
import Logo from "../assets/img/Vector.svg";
import UserAvatar from "../assets/img/IMG_9580s.jpg";
import AwatarEllipse from "../assets/img/Ellipse 1 (Stroke).svg";

export function TweetCard() {
  const number = 100501;
  return (
    <CardWrapper>
      <div>
        <ImgContainer>
          <LogoImg src={Logo} alt="goIt-logo" />
          <TweetImgContainer src={TweetImage} alt="tweet-image" />
        </ImgContainer>
        <Line>
          <AwatarWrapper src={AwatarEllipse} alt="user-avatar" />
          <AwatarImg src={UserAvatar} alt="user-avatar" />
        </Line>

        <ContentContainer>
          <DataContent> 777 tweets</DataContent>
          <DataContent>{number.toLocaleString("en-US")} Followers</DataContent>
          <CardButton type="button" onClick={() => console.log("hello")}>
            Follow
          </CardButton>
        </ContentContainer>
      </div>
    </CardWrapper>
  );
}
export default TweetCard;

const CardWrapper = styled.div`
  position: relative;
  display: flex;

  flex-direction: column;
  align-items: center;
  width: 380px;
  height: 460px;
  border-radius: 20px;
  background: linear-gradient(142deg, #471ca9 0%, #5736a3 69.1%, #4b2a99 100%);
  box-shadow: -2.5776965618133545px 6.873857021331787px 20.621572494506836px 0px
    rgba(0, 0, 0, 0.23);
`;

const ImgContainer = styled.div`
  position: relative;
`;

const TweetImgContainer = styled.img`
  display: block;
  padding: 28px 36px 18px;
`;

const LogoImg = styled.img`
  position: absolute;
  top: 20px;
  left: 20px;
`;
const Line = styled.div`
  position: relative;
  width: 100%;
  height: 8px;
  background: #ebd8ff;
  box-shadow: 0px 3.4369285106658936px 2.5776965618133545px 0px #fbf8ff inset,
    0px 3.4369285106658936px 3.4369285106658936px 0px rgba(0, 0, 0, 0.06),
    0px -1.7184642553329468px 3.4369285106658936px 0px #ae7be3 inset;
`;

const AwatarWrapper = styled.img`
  position: absolute;
  top: -36px;
  left: 150px;
`;
const AwatarImg = styled.img`
  position: absolute;
  top: -27.5px;
  left: 163.5px;
  width: 63px;
  height: 63px;
  border-radius: 50%;
  background-color: #5736a3;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 62px;

  & > :first-child {
    margin-bottom: 16px;
  }
`;

const DataContent = styled.p`
  margin: 0;
  color: #ebd8ff;
  font-family: Montserrat;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-transform: uppercase;
`;

const CardButton = styled.button`
  width: 196px;
  height: 50px;
  padding: 14px 28px;
  margin-top: 26px;
  margin-bottom: 36px;
  border-radius: 10.311px;
  background: #ebd8ff;
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
  border: none;
`;
