import styled from "styled-components";

export function Home() {
  return (
    <ContentWrapper>
      <WelcomeMessage>Welcome to home page !</WelcomeMessage>
    </ContentWrapper>
  );
}
export default Home;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const WelcomeMessage = styled.div`
  padding: 80px;
  border-radius: 20px;
  flex-shrink: 0;
  background-color: #ebd8ff;
  color: #4b2a99;
  font-family: Montserrat;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-transform: uppercase;
  box-shadow: 1px 1px 5px 1px #4b2a99;
`;
