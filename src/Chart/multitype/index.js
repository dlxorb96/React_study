// react, library
import { useEffect, useRef, useState } from 'react';
import * as s from "../style.js"

// chart
import { Line as LineChart } from "react-chartjs-2";
import { Chart as ChartJS } from 'chart.js/auto'
import { Chart } from 'react-chartjs-2'
import CharDataLabels from 'chartjs-plugin-datalabels';
import { DefaultOption, MultiAxesOption } from "../option.js";

function Multitype(props) {
  const chartRef = useRef(null);
  // 차트 합계 가져오기
  useEffect(() => {
    console.log("DefaultOption", DefaultOption());
    console.log("MultiAxesOption", MultiAxesOption());
    const a = DefaultOption();
    const b = MultiAxesOption();
    // const options = {
    //   ...DefaultOption(),
    //   ...MultiAxesOption(),
    // }
    console.log("options", a ,b);
    const chart = chartRef.current;
    calculateStackedSum(chart);
  }, []);


  function calculateStackedSum(chart) {
    // [1,2,3,4,5,6], [1,2,3,4,5,6], [1,2,3,4,5,6]
    console.log("chart", chart)
    const sumArr = new Array(chart.data.labels.length).fill(0)
    chart.data.datasets.map((dataset)=>{
      if(dataset.type !== "bar") return;  // 바 차트 값만 누적 
      dataset.data.map((data , j)=>{
        sumArr[j] += data
      })
    })
    console.log(sumArr);

    // const options = {...chart.options}
    console.log("options", props.options)
    chart.options = options;
    chart.update();
  }

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
      datalabels: {
        // formatter: function (value, context) {
        //   const idx = context.dataIndex;
        //   console.log(1)

        //   // return value
        //   var sum = 0;
        //   context.dataset.data.forEach(val => {
        //     sum += val;
        //   });
        //   return sum;
        // }
      }
    },

    // 시트 js -> 프론트 단에서 처리하는 거



    // tooltip
    // interaction: {
    //   mode: 'index',  // mode : 'index'시 tooltip에 모든 데이터가 나온다.
    //   intersect: false,  // 근처에만 가도 tooltip이 뜨게 할 것 인가
    // },
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
      y1: {
        type: 'linear',
        display: true,
        position: 'right',
        stacked: true
      }

    },
  };

  // const dataSample = labels.map(()=> Math.floor(Math.random() * 10))

  const data = props.data || {
    labels,
    datasets: [
      {
        type: 'line',
        label: 'Dataset 1',
        borderColor: 'rgb(255, 99, 132)',
        borderWidth: 2,
        fill: false,
        data: [1, 2, 3, 4, 5, 6, 7],
        yAxisID: 'y1',
      },
      {
        type: 'bar',
        label: 'Dataset 2',
        backgroundColor: 'rgb(75, 192, 192)',
        data: labels.map(() => Math.floor(Math.random() * 10)),
        // borderColor: 'white',
        // borderWidth: 2,
      },
      {
        type: 'bar',
        label: 'Dataset 3',
        backgroundColor: 'rgb(53, 162, 235)',
        data: labels.map(() => Math.floor(Math.random() * 10)),
      },
      {
        type: 'bar',
        label: 'Dataset 4',
        backgroundColor: 'yellow',
        data: labels.map(() => Math.floor(Math.random() * 10)),
      },
      {
        type: 'bar',
        label: 'Dataset 5',
        backgroundColor: 'red',
        data: labels.map(() => Math.floor(Math.random() * 10)),
      },
    ],
    options: {
      onAnimationComplete: function () {
        console.log("onAnimationComplete");
        const ctx = this.chart.ctx;
        ctx.font = this.scale.font;
        ctx.fillStyle = this.scale.textColor;
        ctx.textAlign = "center";
        ctx.textBaseline = "bottom";

        this.data.datasets.forEach(function (dataset) {
          dataset.data.forEach(function (dataPoint, index) {
            // Line Chart
            const x = this.scale.calculateX(index);
            const y = this.scale.endPoint - this.scale.calculateY(dataPoint);
            ctx.fillText(dataPoint, x, y - 10);
          }, this);

          // Bar Chart
          if (dataset.bars) {
            dataset.bars.forEach(function (bar) {
              const x = bar.x;
              const y = bar.y;
              ctx.fillText(bar.value, x, y - 5);
            });
          }
        }, this);
      },
    }
  }

  data.sum = labels.map((e, i) => {
    return data.datasets[i] ? data.datasets[i].data.reduce((a, b) => a + b, 0) : 0;
  })

  return (
    <s.Container style={{ width: props.width, height: props.height }}>
      <h2>{props.title}</h2>
      <Chart data={data} options={options} ref={chartRef}
      // plugins={[CharDataLabels]} 
      />
    </s.Container>

  )
}

export default Multitype;
