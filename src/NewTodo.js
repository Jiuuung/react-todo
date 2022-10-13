import React from 'react';
import {useState, useEffect} from 'react';
import './NewTodo.css';

function NewTodo({title, content, due, importance, writeHandler, saveHandler,dueHandler}) {
  
  
  return (
      <div className="NewTodo">
        <div className="NewTodochild">
        <b>제목: </b><input name="title" onChange={writeHandler} value={title}/>
        <br></br>
        <b>내용: </b><input name="content" onChange={writeHandler} value={content}/>
        <br></br>
        <b>기한: </b><input type="date" name="due" value={due} onChange={writeHandler}/>
        <br></br>
        <b>중요도: </b>
        <select onChange={writeHandler} name="importance" value={importance}>
          <option value="중요도" defaultValue>중요도</option>
          <option value="높음">높음</option>
          <option value="중간">중간</option>
          <option value="낮음">낮음</option>
        </select>
        <br></br>
        </div>
        <button onClick={saveHandler} >저장하기</button>
        
      </div>
  );
}

export default NewTodo;
/*

    < TodoCard title={title} content={content} due={due} importance={importance}/>
          import React from 'react';
import {useState, useEffect} from 'react';

function NewTodo({title, content, due, importance, writeHandler, saveHandler}) {
  const [write, setWrite]= useState(false);
  const [title, setTitle]= useState('');
  const [content, setContent]= useState('');
  const doneWrite=()=>{
    console.log({title});
    console.log({content});
    if(title===''||content===''){
      alert('빈칸이 없어야 합니다');
    }
  };
  const titleHandler=(e) => {
    setTitle(e.target.value);
  };
  const contentHandler=(e) => {
    setContent(e.target.value)
  };
  return (
      <>
          <div className="main">Todo 리스트 작성하기</div>
          <b>제목: </b><input onChange={titleHandler} value={title}/>
          <br></br>
          <b>내용: </b><input onChange={contentHandler} value={content}/>
          <br></br>
          <b>기한: </b><input />
          <select name="importance">
            <option value="high">높음</option>
            <option value="middle">중간</option>
            <option value="low">낮음</option>
          </select>
          <button onClick={doneWrite} >저장하기</button>
      </>
  );
}

export default NewTodo;

    < TodoCard title={title} content={content} due={due} importance={importance}/>
          
          
*/

