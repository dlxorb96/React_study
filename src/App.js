//eslint-disable

import { useState } from 'react';
import './App.css';

function App() {

  let header = "헤더"
  // a는 useState에 담긴 값
  // b는 useState를 수정하는 함수
  // Destructuring문법
  let num = [1,2];
  let a = num[0];
  let c = num[1];

  // d는 1 f는 2가 들어감
  let [d,f] = [1,2];

  
  let [title, changeTitle] = useState(["남자 코트 추천", "외투", "바지"]);
  
  // useState에는 ['남자 코트 추천', 함수] 남음

  let [likeCnt, changeLikeCnt] = useState([0,0,0]);
  // 일반 변수는 갑자기 변경되면 html에 자동으로 반영안됨.
  // 일반 변수는 .html() 이런식으로 넣어줘야 할듯
  // state쓰던 html은 자동으로 재렌더링 됨.

  const [modal, setModal] = useState(false)

  const [selectedTItle, setSelectedTitle] = useState(0);

  function clickLike(){
    // state는 등호 변경x
    likeCnt +=1
  }

  return (
    <div className="App">
      {/* {title.map((e, i)=>{
        return{
          <div className='list'>
            <h4>글 제목</h4>
            <p>{e[i]}</p>
          </div>    
        }
      })} */}
      <div className='header'>
        <h4>탄소중립HUB샘플</h4>
      </div>

      {
        title.map((e,i)=>{
          return(
            <div className='list' key={i}>
              <h4 style={{display: 'inline-block'}}
                onClick={()=>{
                  setSelectedTitle(i);
                  setModal(!modal);
                }}>글 제목</h4><span onClick={()=>{
                const arr = [...likeCnt]
                arr[i] += 1
                changeLikeCnt(arr)
                }}>👍</span> {likeCnt[i]} 
              <p>{e}</p>
            </div>
          )
        })
      }

      {/* state변경함수 특징
        기존 state == 신규 state의 경우 변경안해줌
        =은 메모리 주소를 나타내는 거기때문에
        기존 주소가 그대로이기 때문에
        reference data type
      */}
      <button onClick={()=>{
        let copy = [...title];
        copy[0] = "여자코트추천";
        changeTitle(copy)}}>
        바꾸기
      </button>

      <button onClick={()=>{
        modal === true ? setModal(false) : setModal(true)
        }}>
      모달토글
      </button>

      <button onClick={()=>{
        let copy1 = [...title];
        
        
        copy1.sort((a,b) => b.localeCompare(a));
        console.log(copy1)
        changeTitle(copy1)
      }}>
        가나다순정렬
      </button>
      {
        modal === true ? 
          <Modal title={title} changeTitle = {changeTitle} selectedTItle = {selectedTItle} /> : null
      }
    </div>
  );
}

function Modal(props){
  return(
    <div>
      <div className='modal' style={{background : props.color}}>
        <h4>{props.title[props.selectedTItle]}</h4>
        <p>날짜</p>
        <p>상세내용</p>
        <button>글수정</button>
      </div>
    </div>
  )
}
 
export default App;
