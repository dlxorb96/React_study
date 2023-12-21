// react
import { useState } from 'react';

// chart
import { Doughnut as DoughnutChart } from "react-chartjs-2";
import { Chart as ChartJS } from 'chart.js/auto'

// styles
import * as s from "../style.js";

function Doughnut(props) {

  // TODO: 차트와 거리 조절하기
  const options = props.options || {
    responsive: props.responsive || true,
    plugins: {
      legend: {
        position: props.legendPosition || 'bottom', // 범례 위치
      },
      title: {
        display: props.titleDisplay || true,       
        text: props.title || 'Chart.js doughnut Chart', // 차트 제목
        position : props.titlePosition || "bottom", // 제목 위치
      },
    },
  };

  const data = props.data || {
    labels: props.labels,
    datasets: [
      {
        label: '' || props.label,
        data: props.data,
        backgroundColor: props.backgroundColor,
        borderColor: props.borderColor,
        borderWidth: 1 || props.borderWidth,
      },
    ],
  };

  return (
    <s.Container style={{width:props.width, height: props.height}}>
      <h2>{props.title}</h2>
      <DoughnutChart data={data} options={options}/>
    </s.Container>

  )
}

export default Doughnut;