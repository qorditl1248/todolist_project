import React, { useEffect, useState } from "react";
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import api from "../../apis/instance";
import axios from "axios";
import ReactModal from "react-modal";
import { selectMonthAtom } from "../../atoms/todolistAtom";
import { useRecoilState } from "recoil";

function MainList(props) {
  const [inputValue, setInputValue] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modifyInput, setModifyInput] = useState({
    todoId: "",
    content: ""
  }); 
  const [selectMonth, setSelectMonth ] = useRecoilState(selectMonthAtom);
  
  useEffect(() => {
    requestTodoList();
  }, []);

  // input 
  const handleRegisterInputChange = (e) => {
    setInputValue(e.target.value);
  };

  // input 클릭 
  const handleRegisterSubmitClick = async () => {
    if(inputValue.trim() !== '') {
      const newRegister = {
        content: inputValue,
        date: selectMonth,
      };
      let response = null;
      try {
        response = await api.post("/todo", newRegister);
        console.log(response.data);
      } catch (e) {
        console.error(e);
      }
      alert("등록성공!")
    } else {
      alert("작성하신 내용이 없습니다.")
    }
    setInputValue("");
    requestTodoList();
  };

  // todolist 가져오기
  const requestTodoList = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/v1/todolist");
      console.log(response.data);
      setTodoList(response.data);
    } catch (e) {
      console.error(e);
    }
  };


  // 삭제 버튼 클릭 
  const handleDeleteClick = async (todoId) => {
    if(window.confirm("삭제하시겠습니까?")) {
      await requestDelete(todoId);
      alert("삭제 완료!")
      requestTodoList();
    }
  }

  // 삭제 데이터 
  const requestDelete = async (todoId) => {
    let responseData = null;
    try {
      const response = await api.delete(`/todo/${todoId}`);
      responseData = response.data
    } catch(e) {
      console.error(e);
    }
    return responseData;
  }

  // 닫힌 modal 창 상태 
  const closeModal = () => {
    setIsModalOpen(false);
    setModifyInput("");
  }
  
  
  // 전체 화면에서 수정버튼 -> modal창 열림 
  const handleModifyClick = async(todoId) => {
    setIsModalOpen(true);
    const responseData = await requestTodo(todoId);
    setModifyInput(responseData);
  }

  // 단건 조회로 데이터 가져옴 
  const requestTodo = async(todoId) => {
    let responseData = null;
    try {
      const response = await api.get(`/todo/${todoId}`);
      responseData = response.data;
    } catch(e) {
      console.error(e);
    }
    return responseData;
  }

  // 수정 완료 클릭시 
  const handleModifySubmitClick = async() => {
    await requestModify();
    closeModal();
    requestTodoList();
  }

  // 수정 값 -> 서버 
  const requestModify = async() => {
    let responseData = null;
    try {
      const response = await api.put(`/todo/${modifyInput.todoId}`, modifyInput);
      responseData = response.data;
    } catch(e) {
      console.error(e);
    }
    return responseData;
  }
  
  // modal 창에서 수정 내용 
  const handleModifyInputChange = (e) => {
    setModifyInput(modifyInput => {
      return {
        ...modifyInput,
        [e.target.name]: e.target.value 
      }
    })
  }


  return (
    <>
    <ReactModal css={s.modal} 
      isOpen={isModalOpen} onRequestClass={closeModal} ariaHideApp={false} >
      <div css={s.modfiy}>
          <input
            type="text"
            name="todoId"
            onChange={handleModifyInputChange}
            value={modifyInput.todoId}
            disabled={true}
          />
          <input
            type="text"
            name="content"
            onChange={handleModifyInputChange}
            value={modifyInput.content}
          />
        
        <div>
          <button onClick={handleModifySubmitClick}>수정</button>
          <button onClick={() => closeModal()}>취소</button>
        </div>
      </div>
    </ReactModal>
    <div css={s.container}>
      <div className="input-box">
        <input
          type="text"
          onChange={handleRegisterInputChange}
          value={inputValue}
        />
        <button onClick={handleRegisterSubmitClick}>추가</button>
      </div>
      <div className="mini-box">
        {todoList.map((todoList) => (
          <div className="card" key={todoList.todoId}>
            <div className="info">
              <input type="checkbox"  />
              <p>{todoList.date}</p>
              <div className="buttons">
                <button onClick={() => handleModifyClick(todoList.todoId)}>수정</button>
                <button onClick={() => handleDeleteClick(todoList.todoId)}>삭제</button>
              </div>
            </div>
            <p>{todoList.content}</p>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}

export default MainList;
