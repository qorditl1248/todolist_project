import React, { useState } from "react";
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useRecoilState } from "recoil";
import { modalAtom, selectMonthAtom, todoListAtom } from "../../atoms/todolistAtom";
import api from "../../apis/instance";

function SubList(props) {
  const [isDone, setIsDone] = useState(false);
  const [todolist, setTodolist] = useRecoilState(todoListAtom);
  const [isModalOpen, setIsModalOpen] = useRecoilState(modalAtom);
  const [selectMonth, setSelectMonth ] = useRecoilState(selectMonthAtom);

  const handleStateChangeClick = () => {
    if(!isModalOpen) {
      setIsDone((isDone) => {
        return !isDone;
      }); 
    }
  };

  const requestTodoList = async () => {
    try {
      const response = await api.get(`/todolist/${selectMonth}`);
      console.log(response.data);
      setTodolist(response.data);
    } catch (e) {
      console.error(e);
    }
  };

  const  handleCheckboxStateChange = async (todoId, state) => {
    let responseData = null;
    try {
      const response = await api.put(`/todo/checkbox`, {todoId, state});
      responseData = response.data;
    } catch(e) {
      console.error(e);
    }
    requestTodoList();
    console.log(responseData);
  }



  return (
    <>
      <div css={s.container}>
          <div className="icon" onClick={handleStateChangeClick}>
            <div className={`move ${isDone ? "right" : ""}`}></div>
            <div className="status">미완료</div>
            <div className="status">완료</div>
          </div>
          <div className="mini-box">
            {todolist.map((todo) => {
              if (!todo.state === !isDone) {
                return (
                  <div className="card" key={todo.todoId}>
                    <div className="info">
                <input type="checkbox" onChange={() => handleCheckboxStateChange(todo.todoId, todo.state)} checked={todo.state} id={todo.todoId}/>
                <label htmlFor={todo.todoId}></label>
                    </div>
                      <p className="content">{todo.content}</p>
                  </div>
                );
              }
              return;
            })}
          </div>
      </div>
    </>
  );
}

export default SubList;
