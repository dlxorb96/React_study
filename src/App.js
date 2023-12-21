// react, library
import React, { useRef } from 'react';
import { BrowserRouter, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

// primeReact
import 'primereact/resources/themes/bootstrap4-light-blue/theme.css';

// 컴포넌트
import Header from "./common/Header";
import Sidebar from "./common/Sidebar";
import Content from "./common/Content";


function App() {

  const MainContainer = styled.div`
    display : flex;
    height : 100%
  `;



  return (
    <BrowserRouter>
      <div style={{ height: "100vh" }}>
        <Header></Header>
        <MainContainer>
          <Sidebar></Sidebar>
          <Content></Content>
        </MainContainer>
      </div>
    </BrowserRouter>
  )
}

export default App;
