
import './App.css';
import { useState } from 'react';
import React from 'react';

function App() {

  let [글제목,글제목변경] = useState(['남자 코트 추천','강남 우동 맛집', '파이썬 독학']);
  let [따봉,따봉변경] = useState([0,0,0]); 
  let [modal,setModal] = useState(false);
  let [selectedTitle,setSelectedTitle] = useState(0);
  let [입력값, 입력값변경] = useState('');

  return (
    <div className="App">
      <div className="black-nav">
        <h4>React Blog</h4>
      </div>
      <div className="list">
        <button onClick={()=>{
          let copy = [...글제목];
          copy[0] = '여자 코트 추천';
          글제목변경(copy);
        }}>글제목 변경</button>
        <button onClick={()=>{
          let copy = [...글제목];
          글제목변경(copy.sort());
        }}>가나다순 정렬</button>
      </div>
      
      {/* <div className="list">
        <h4>{글제목[0]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4 onClick={()=>{
            setModal(!modal);
          }}>{글제목[2]}</h4>
        <p>2월 17일 발행</p>
      </div> */}
      
      
      {
        글제목.map(function(a, i){
          return (
          <div className="list" key={i}>
             <h4 onClick={()=>{
                setSelectedTitle(i);
                setModal(!modal);
              }}> { 글제목[i] } 
              <span onClick={ (e)=>{
                  let copy = [...따봉];
                  copy[i] = copy[i] + 1;
                  e.stopPropagation();  
                  따봉변경(copy); 
              } } >👍</span> 
              { 따봉[i] }
              <input className='delete-div' type='button' value="삭제" 
                    onClick={
                      ()=>{
                          // let copy = [...글제목];
                          // copy.splice(i,i+1);
                          // 글제목변경(copy);
                          delete 글제목[i];
                      }
                    }/>
            </h4>
            <p>2월 18일 발행</p>
          </div> )
        })
      }

      <input type='text' onChange={(e)=>{ 입력값변경(e.target.value) }} />
      <input type='button' value="글발행" 
          onClick={
            ()=>{
                  let copy = [...글제목];
                  copy.unshift(입력값);
                  글제목변경(copy);
                }
          } />
      {
        modal ? <Modal titleChang={글제목변경} title={글제목} modalTitle={selectedTitle}/> : '' 
      }
      <Modal2></Modal2>
    </div>

  );
}

function Modal(props){
  
  return (
    <div className="modal">
      <h4>{props.title[props.modalTitle]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button onClick={ () => {
        let copy = [...props.title];
        copy[0] = '여자 코트 추천';
        props.titleChang(copy);
      }}>글수정</button>
    </div>
  );
}

class Modal2 extends React.Component{
  constructor(){
    super();
    this.state = {
      name : 'kim',
      age : 20
    }
  }
  render(){
    return(
      <div>안녕 {this.state.name}</div>
    )
  }
}

export default App;
