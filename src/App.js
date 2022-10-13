import React from 'react';
import './App.css';
import {useState} from 'react';
import TodoCard from './TodoCard';
import NewTodo from './NewTodo';

function App() {
  const [todolist,setTodolist]=useState([]);
  const [input, setInput]=useState({title: '', content: '', due:'', importance:'중요도'});
  const {title, content, due, importance}=input;
  const [check, setCheck]=useState(['전체','높음','중간','낮음']);
  const [id, setId]=useState(0);
  const writeHandler= (e)=>{
    const {name, value}= e.target;
    setInput(
      {
        ...input,
        [name]:value
      }
    );
  };
  const deleteHandler = (e)=>{
    const id=e.target.id;
    setTodolist(todolist.filter((todo)=>(todo.id!==parseInt(id))));
  };
  const filterHandler = (e)=>{
    const name=e.target.name;
    if(check.includes(name)){
      if(name==='전체'){
        setCheck([]);
      }
      else{
        if(!check.includes('전체')){setCheck(check.filter((fil)=>(fil!==name)));}
        
      }
    }
    else{
      if(name==='전체'){
        setCheck(['전체','높음','중간','낮음']);
      }
      else{
      setCheck(check.concat(name));
      }
    }
  }
  const saveHandler =()=>{
    if(title===''|importance==='중요도'|due===''){
      alert('빈칸을 채우세요.');
    }
    else{
      setId(id+1);
      const todo={
        id,
        title,
        content,
        due,
        importance
      };
      setTodolist(todolist.concat(todo));
      setInput({title: '', content: '', due: '', importance:'중요도'});
    }
  };
  
  return (
      <>
        <div className="main">Todo 리스트</div>
        
        < NewTodo title={title} content={content} due={due} importance={importance} writeHandler={writeHandler} saveHandler={saveHandler} />
        <br></br>
        <div className="impfil">
          <b>중요도 필터링: </b>
          <input type="radio" name="전체" checked={check.includes('전체')} onClick={filterHandler}/>
          <span>전체</span>
          <input type="radio" name="높음" checked={check.includes('높음')|check.includes('전체')} onClick={filterHandler}/>
          <span>높음</span>
          <input type="radio" name="중간"  checked={check.includes('중간')|check.includes('전체')} onClick={filterHandler}/>
          <span>중간</span>
          <input type="radio" name="낮음"  checked={check.includes('낮음')|check.includes('전체')} onClick={filterHandler}/>
          <span>낮음</span>
        </div>
        <br></br>
        {todolist.filter((todo)=>check.includes(todo.importance)).map((todo)=>
          < TodoCard id={todo.id} title={todo.title} content={todo.content} due={todo.due} importance={todo.importance} key={todo.id} deleteHandler={deleteHandler}/>
        )}
      </>
  );
}

export default App;
/*
    
*/
