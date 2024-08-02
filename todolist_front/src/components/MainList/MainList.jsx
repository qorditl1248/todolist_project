import React, { useEffect,useState } from "react";
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import api from "../../apis/instance";
import ReactModal from "react-modal";
import {selectMonthAtom, todoListAtom } from "../../atoms/todolistAtom";
import { useRecoilState } from "recoil";

function MainList(props) {
  const emptyModifyInput = {
    content: ""
  };

  const [inputValue, setInputValue] = useState("");
  const [todoList, setTodoList] = useRecoilState(todoListAtom);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modifyInput, setModifyInput] = useState(emptyModifyInput); 
  const [selectMonth, setSelectMonth ] = useRecoilState(selectMonthAtom);
  
  // const modifyInputRef = useRef(null);
  
  // todolist가 바뀔때마다 렌더링
  useEffect(() => {
    requestTodoList();
  }, [selectMonth]);

  // input 상태의 값 넣기 
  const handleRegisterInputChange = (e) => {
    setInputValue(e.target.value);
  };

  // input 추가 버튼 클릭
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
      const response = await api.get(`/todolist/${selectMonth}`);
      console.log(response.data);
      setTodoList(response.data);
    } catch (e) {
      console.error(e);
    }
  };

  // 삭제 버튼 클릭 
  const handleDeleteClick = async (todoId) => {
    if(window.confirm("삭제하시면 되돌릴 수 없습니다.\n그래도 삭제하시겠습니까?")) {
      await requestDelete(todoId);
      alert("삭제 완료!");
      requestTodoList();
    }
  }

  // 삭제 데이터 todoId 
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

  // modal 창 상태  
  const closeModal = () => {
    setIsModalOpen(false);
    setModifyInput(emptyModifyInput);
  }
  
  
  // 전체 화면에서 수정버튼 -> modal창 열림 
  const handleModifyClick = async(todoId) => {
    setIsModalOpen(true);
    const responseData = await requestTodo(todoId);
    setModifyInput(responseData);
  }

  // 수정버튼이 눌려진 todo 내용값을 서버에서 들고오기 
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

  // modal - 수정 완료 버튼 클릭 
  const handleModifySubmitClick = async() => {
    await requestModify();
    closeModal();
    alert("수정 완료!");
    requestTodoList();
  }

  // 수정 데이터 (수정 modal 창 수정 내용)
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

  // checkbox 상태
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

  // enter 키 
  const handleOnkeyDown = (e) => {
    if (e.keyCode === 13) {
      handleRegisterSubmitClick();
    }
  };

  const handleOnkeyDownModal = (e) => {
    if(e.keyCode === 13) {
      handleModifySubmitClick();
    }
  }

  return (
    <>
    <ReactModal css={s.modal} 
      isOpen={isModalOpen} onRequestClose={closeModal} ariaHideApp={false}> 
      <div css={s.modfiy}>
        <h2>TODO LIST 수정</h2>
          <input
            type="text"
            name="content"
            onChange={handleModifyInputChange}
            value={modifyInput.content}
            onKeyDown={handleOnkeyDownModal}
            autoFocus
            
          />
        <div css={s.button}>
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
          placeholder="할 일을 입력해주세요"
          onKeyDown={handleOnkeyDown}
          maxLength={70}
        />
        <button onClick={handleRegisterSubmitClick} 
          onKeyDown={handleOnkeyDown} 
          name="button">추가
        </button>
      </div>
      <div className="mini-box">
        {todoList.map((todoList) => (
          <div className="card" key={todoList.todoId}>
            <div className="info">
              <input type="checkbox" onChange={() => handleCheckboxStateChange(todoList.todoId, todoList.state)} checked={todoList.state} id={todoList.todoId}/>
              <label htmlFor={todoList.todoId}></label>
              <p>{todoList.date}</p>
              <div className="buttons">
                <button onClick={() => handleModifyClick(todoList.todoId)}>수정</button>
                <button onClick={() => handleDeleteClick(todoList.todoId)}>삭제</button>
              </div>
            </div>
            <p className="todo-content">{todoList.content}</p>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}

export default MainList;
