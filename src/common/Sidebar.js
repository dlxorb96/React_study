// react , library
import { useEffect, useState } from 'react';
import styled from "styled-components";

// primeReact
import { PanelMenu } from 'primereact/panelmenu';

// data
import sideBarJSONData from "../data/sideBarData.json"


function Sidebar(props) {

  let [sideBarData, setSideBarData] = useState([]);
  // props.model.map
  const [value, setValue] = useState('');
  useEffect(() => {
    // 컴포넌트가 처음 마운트될 때만 데이터를 가져와 설정하도록 함
    setSideBarData(sideBarJSONData);
    console.log(sideBarData)
  }, []); // 빈 의존성 배열은 효과가 컴포넌트가 처음 마운트될 때만 실행됨을 보장함

  useEffect(() => {
    console.log("sideBarData", sideBarData)
  }, [sideBarData])

  const SideBar = styled.div`
    width : 250px;
    height : 100%;
    background : #002060;
  `;

  const Title = styled.h2`
    text-align : center;
    margin : 0px;
    padding : 50px;
    color : white;

  `;



  return (
    <SideBar>
      <div>
        <Title>IBK 배출량</Title>
      </div>
      
      <div className="card flex justify-content-center">
        <PanelMenu model={sideBarData.items} className="w-full md:w-25rem" multiple />
      </div>

    </SideBar>
  )
}

export default Sidebar;
