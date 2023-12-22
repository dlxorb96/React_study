// react, library
import { useState } from 'react';
import * as s from "../style.js"

// chart
import { Line as LineChart } from "react-chartjs-2";
import { Chart as ChartJS } from 'chart.js/auto'
import { Chart } from 'react-chartjs-2'
import CharDataLabels from 'chartjs-plugin-datalabels';

function BarChart(props) {

  // TODO: 차트와 거리 조절하기
  const labels = props.label || ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  
  const options = props.options || {
    plugins: {
      // 제목 여부
      title: {
        display: true || props.titleDisplay,       
        text: 'Chart.js Bar Chart - Stacked',
      },
      // 범례
      legend: {
        position: props.legendPosition || 'bottom', // 범례 위치
      },
      // 그래프 위 text
      datalabels : {
        formatter : function(value, context) {
          const idx = context.dataIndex;
          console.log(1)
          return context.chart.data.lables[idx] + value + '%';
        }
      }
    },
    // 시트 js -> 프론트 단에서 처리하는 거

    

    // tooltip
    interaction: {
      // mode: 'index',  // mode : 'index'시 tooltip에 모든 데이터가 나온다.
      // intersect: false,  // 근처에만 가도 tooltip이 뜨게 할 것 인가
    },
    responsive: true,
    scales: {
      // bar 차트의 x축 stack여부
      x: {
        stacked: true,
      },
      // bar 차트의 y축 stack여부
      y: {
        stacked: true,
      },
      // 2번째 기준선
      y1 : {
        type : 'linear',
        display : false || props.y1Display,
        position: 'right',
        stacked : true
      }

    },
  };
  
  const data = props.data || {
    labels,
    datasets: [
      {
        type: 'line',
        label: 'Dataset 1',
        borderColor: 'rgb(255, 99, 132)',
        borderWidth: 2,
        fill: false,
        data: labels.map(() => Math.random() * 1000),
        yAxisID: 'y1',
      },
      {
        type: 'bar',
        label: 'Dataset 2',
        backgroundColor: 'rgb(75, 192, 192)',
        data: labels.map(() => Math.random() * 1000),
        // borderColor: 'white',
        // borderWidth: 2,
      },
      {
        type: 'bar',
        label: 'Dataset 3',
        backgroundColor: 'rgb(53, 162, 235)',
        data: labels.map(() => Math.random() * 1000),
      },
      {
        type: 'bar',
        label: 'Dataset 4',
        backgroundColor: 'yellow',
        data: labels.map(() => Math.random() * 1000),
      },
      {
        type: 'bar',
        label: 'Dataset 5',
        backgroundColor: 'red',
        data: labels.map(() => Math.random() * 1000),
      },
    ],
  };

  return (
    <s.Container style={{ width: props.width, height: props.height }}>
      <h2>{props.title}</h2>
      <Chart data={data} options={options} />
    </s.Container>

  )
}

export default Line;
