// import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale,PointElement, BarElement, LineElement} from "chart.js";
import { Chart as ChartJS } from 'chart.js/auto'
import { Bar } from "react-chartjs-2";
import { useState } from 'react';
import ChartDataLables from "chartjs-plugin-datalabels";




// ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, PointElement, LineElement);


function Donught(props) {
  let [chatData, setChatData] = useState([]);
  let option = {
    // responsive : true,  // 반응형 여부
    plugin: {
      legend: {
        position: "top"
      },
      title: {
        display: true,
        text: "도넛차트 테스트"
      }
    },
    plugins: {
      color: "#fff", // color of the label text
      datalabels : {
        formatter: function (value, context) {
          // Grab the label for this value
          console.log(1);
          const label = context.dataset.data[context.dataIndex];
  
          // Format the number with 2 decimal places
  
          const formattedVal = Intl.NumberFormat("en-US", {
            minimumFractionDigits: 20,
          }).format(value);
  
          return `${label}`;
        }
      }
      
    }
  }
  let labels = [1, 2, 3, 4];
  const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        label: '# of Votes',
        type: "bar",
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
      {
        label: '# of Votes',
        type: "line",
        data: [10, 9, 8, 7, 6, 5],
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
      }
    ],
  };

  return (
    <div style={{ width: props.width, height: props.height }}>
      도넛차트임
      {/* ChartDataLables 라이브러리 사용
        plugins={[ChartDataLables]} porps로 전달 후
        option.plugins로 설정
      */}
      <Bar data={data} plugins={[ChartDataLables]} options={option} />

    </div>
    
  )
}

export default Donught;