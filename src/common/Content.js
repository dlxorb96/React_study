// react , library
import { useEffect, useState } from 'react';
import { useNavigate, Route, Routes } from 'react-router-dom';

import styled from "styled-components";

// primeReact
import { Button } from 'primereact/button';

// 컴포넌트
import DonughtChart from '../Chart/doughnut/index';
import LineChart from '../Chart/line/index';
import MultitypeChart1 from '../Chart/multitype';
// import Donught from '../Chart/Donught';
// import Donught from '../Chart/Donught';
// import Donught from '../Chart/Donught';
// import Donught from '../Chart/Donught';

function Content(props) {

  const navigate = useNavigate();

  useEffect(() => {
    // 컴포넌트가 처음 마운트될 때만 데이터를 가져와 설정하도록 함
  }, []); // 빈 의존성 배열은 효과가 컴포넌트가 처음 마운트될 때만 실행됨을 보장함


  const Container = styled.div`
    padding : 20px;
  `;

  const MarginButton = styled(Button)`
    margin-left : 5px;
  `;

  const data = {
    labels: ['123', '4', '5', '6', '7', 'Orange'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <Container>
      <h2>차트모음</h2>
      <MarginButton label="도넛차트" onClick={() => navigate("/donught")} />
      <MarginButton label="라인차트" onClick={() => navigate("/line")} />
      <MarginButton label="멀티타입차트1" onClick={() => navigate("/mulitype1")} />
      <MarginButton label="스택차트" onClick={() => navigate("/stack")} />
      <MarginButton label="파이차트" onClick={() => navigate("/pie")} />
      <MarginButton label="혼합차트" onClick={() => navigate("/mix")} />
      <Routes>
        <Route path="/donught" element={<DonughtChart data={data} width={"400px"} height={"200px"} />}></Route>
        <Route path="/line" element={<LineChart title={"라인차트임"} width={"400px"} height={"200px"} />}></Route>
        <Route path="/mulitype1" element={<MultitypeChart1 />}></Route>
        <Route path="/donught" element={<DonughtChart />}></Route>
        <Route path="/donught" element={<DonughtChart />}></Route>
        <Route path="/donught" element={<DonughtChart />}></Route>
      </Routes>
    </Container>
  )
}

export default Content;
