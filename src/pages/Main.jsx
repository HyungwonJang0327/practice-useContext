import React, { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../context/ThemeContext";

const Main = () => {
  const { isDark } = useContext(ThemeContext);
  return (
    <MainWrapper isDark={isDark}>
      <WidthSetting>
        <p>
          useContext와 Styled-components를 이용한 다크모드 연습 페이지 입니다.
          yml. 테스트 push 입니다.
        </p>
      </WidthSetting>
    </MainWrapper>
  );
};

export default Main;

const MainWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 668px;
  background-color: ${(props) => (props.isDark ? "black" : "white")};
  color: ${(props) => (props.isDark ? "white" : "black")};
`;
const WidthSetting = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70%;
  min-height: 100%;
`;
