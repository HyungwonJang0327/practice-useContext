import React, { useState } from "react";
import { ThemeContext } from "./context/ThemeContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Main from "./pages/Main";
import Footer from "./components/Footer";
import "./styles/reset.css";

const Router = () => {
  const [isDark, setIsDark] = useState(false);
  return (
    <ThemeContext.Provider value={{ isDark, setIsDark }}>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ThemeContext.Provider>
  );
};

export default Router;
