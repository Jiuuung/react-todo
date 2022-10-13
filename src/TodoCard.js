import React from 'react';
import './TodoCard.css';

const TodoCard =({id, title, content, due, importance, deleteHandler})=>{
    console.log({id});
    return(
        <>
            <div className="todolist">
                <p><b>Todo</b></p>
                <p><b>제목:</b> {title}</p>
                <p><b>내용:</b> {content}</p>
                <span><b>기한:</b> {due}</span>
                <span> <b>중요도:</b> {importance}</span>
                <br></br>
                <button className="del" id={id} onClick={deleteHandler}>삭제하기</button>
            </div>
        </>
    );
};

export default TodoCard;