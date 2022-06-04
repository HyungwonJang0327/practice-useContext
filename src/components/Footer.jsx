import React, { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../context/ThemeContext";
const siteVersion = require("../../package.json");

const Footer = () => {
  const { isDark } = useContext(ThemeContext);
  return (
    <FooterWrapper isDark={isDark}>
      <FooterTitle>Version: {siteVersion.version}</FooterTitle>
    </FooterWrapper>
  );
};

export default Footer;

const FooterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 120px;
  border-top: ${(props) =>
    props.isDark ? "1px solid gray" : "1px solid black"};
  background-color: ${(props) => (props.isDark ? "black" : "white")};
  color: ${(props) => (props.isDark ? "white" : "black")};
`;
const FooterTitle = styled.p``;
