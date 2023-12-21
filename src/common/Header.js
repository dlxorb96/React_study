// react, library
import { useEffect, useState } from 'react';
import styled from "styled-components";

// primeReact
import { MegaMenu } from 'primereact/megamenu';

// data
import headerJSONData from "../data/headerData.json"

function Header(props) {

  let [headerData, setheaderData] = useState([]);
  useEffect(() => {
    // 컴포넌트가 처음 마운트될 때만 데이터를 가져와 설정하도록 함
    setheaderData(headerJSONData);
  }, []); // 빈 의존성 배열은 효과가 컴포넌트가 처음 마운트될 때만 실행됨을 보장함

  useEffect(() => {
    console.log(headerData)
  }, [headerData])

  const Container = styled.div`
    display : flex;
  `;

  const Title = styled.h3`
    display : flex;
    align-items : center;
    justify-content : center;
    width : 250px;
    height : 100%;
    color : white;
    background : #002060;
    margin : 0;
  `;
  
  const Menu = styled.div`
    flex : 1;
  `;



  return (
    <Container style={{height:"80px" }}>
      <Title>IBK 탄소중립 HUB</Title>
      <Menu><MegaMenu model={headerData} style={{height:"100%"}} /></Menu>
      
    </Container>
  )
}

export default Header;