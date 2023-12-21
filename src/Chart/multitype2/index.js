// react
import { useState } from 'react';

// chart
import { Line as LineChart } from "react-chartjs-2";
import { Chart as ChartJS } from 'chart.js/auto'

function Line(props) {

  // TODO: 범례 위치 
  // TODO: 차트와 거리 조절하기

  const options = props.options || {
    responsive: props.responsive || true,
    plugins: {
      legend: {
        position: props.legendPosition || 'bottom', // 범례 위치
      },
      title: {
        display: props.titleDisplay || true,       
        text: props.title || 'Chart.js Line Chart', // 차트 제목
        position : props.titlePosition || "bottom", // 제목 위치
      },
    },
  };

  const labels = props.labels || ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

  const data = props.data || {
    labels : labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: labels.map(() => Math.random() * 1000),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Dataset 2',
        data: labels.map(() => Math.random() * 1000),
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  }

  return (
    <div style={{ width: props.width, height: props.height }}>
      <h2>{props.title}</h2>
      <LineChart data={data} options={options} />
    </div>

  )
}

export default Line;