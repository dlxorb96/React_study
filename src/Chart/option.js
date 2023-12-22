const DefaultOption = (props) => {
  const options = {
    plugins: {
      // 제목 여부
      title: {
        display : props.title == undefined ? true : false,
        text : props.title == undefined ?  "" : props.title,
      },
      // 범례
      legend: {
        position: props.legendPosition || 'bottom', // 범례 위치
      },
    },
    // 반응형 여부
    responsive: true, 
  } 
  return options;
};

const StackOption = (props) => {
  
};

const MultiAxesOption = (props) => {
  const options = {
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
  }
  return options;
};

export {DefaultOption, StackOption , MultiAxesOption};
