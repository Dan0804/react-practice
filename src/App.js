import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let [글제목, 글제목변경] = useState(['남자 코트 추천', '여자 코트 추천', '유아 코트 추천']);
  let [good, good_count] = useState(0)

  function 제목변경 () {
    var newArray = [...글제목];
    newArray[0] = '여자 코트 추천'
    글제목변경(newArray);
  }

  return (
    <div className="App">
      <div className='black-nav'>
        <div>개발 blog</div>
      </div>
      <button onClick={ 제목변경 }>전환 버튼</button>
        
      <div className='list'>
        <h3> {글제목[0]} <span onClick={ () => {good_count(good + 1)} }>👍</span> {good} </h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>
      <div className='list'>
        <h3> {글제목[1]} </h3>
        <p>2월 17일 발행</p>
        <hr/>  
      </div>
      <div className='list'>
        <h3> {글제목[2]} </h3>
        <p>2월 17일 발행</p>
        <hr/>  
      </div>

      <Model/>

    </div>
  );
}

function Model() {
  return (
    <div className='model'>
      <h2>제목</h2>
      <p>날짜</p>
      <p>상세 내용</p>
    </div>
  )
}

export default App;
