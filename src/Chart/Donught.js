import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { useState } from 'react';

ChartJS.register(ArcElement, Tooltip, Legend);


function Donught(props){
    let [chatData, setChatData] = useState([]);
    let option = {
        // responsive : true,  // 반응형 여부
        plugin : {
            legend : {
                position : "top"
            },
            title : {
                display : true,
                text : "도넛차트 테스트"
            }
        }
    }
    let labels = [1,2,3,4];
    const data = {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
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

    return(
        <div style={{width : props.width, height : props.height}}>
            도넛차트임
            <Doughnut data={data} />

        </div>
    )
}

export default Donught;