import React, { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../context/ThemeContext";

const Nav = () => {
  const { isDark, setIsDark } = useContext(ThemeContext);
  return (
    <NavWrapper isDark={isDark}>
      <NavSiteTitle>Practice useContext</NavSiteTitle>
      <DarkBtnWrapper>
        <SetDarkModeBtn
          isDark={isDark}
          onClick={() => {
            setIsDark(!isDark);
          }}
        >
          다크모드
        </SetDarkModeBtn>
      </DarkBtnWrapper>
    </NavWrapper>
  );
};

export default Nav;

const NavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  width: 100%;
  height: 80px;
  border-bottom: ${(props) =>
    props.isDark ? "1px solid gray" : "1px solid black"};
  background-color: ${(props) => (props.isDark ? "black" : "white")};
  color: ${(props) => (props.isDark ? "white" : "black")};
`;
const NavSiteTitle = styled.p`
  display: flex;
  justify-content: center;
  width: 80%;
`;
const DarkBtnWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 20%;
  padding-right: 40px;
`;
const SetDarkModeBtn = styled.button`
  border-style: none;
  width: 55px;
  height: 55px;
  border-radius: 50%;
  font-size: 12px;
  background-color: ${(props) => (props.isDark ? "lightgray" : "black")};
  color: ${(props) => (props.isDark ? "black" : "white")};
`;
