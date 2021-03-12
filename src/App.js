import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
import "./App.css";
import Main from "./Main";
import NavBar from "./Components/Home/NavBar";

const Footer = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 50px;
`;

function App() {
  return (
    <div className="App">
      <NavBar />

      <Main />

      <Footer>Copyright 2021 All rights reserved.</Footer>
    </div>
  );
}

export default App;
