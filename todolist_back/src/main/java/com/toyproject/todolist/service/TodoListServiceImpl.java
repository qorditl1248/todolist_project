package com.toyproject.todolist.service;

import com.toyproject.todolist.dto.*;
import com.toyproject.todolist.entity.TodoList;
import com.toyproject.todolist.repository.TodoListMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class TodoListServiceImpl {

    @Autowired
    private TodoListMapper todoListMapper;

    public int registerTodoList(ReqRegisterTodoListDto reqDto) {

        TodoList todoList = TodoList.builder()
                .todoId(0)
                .content(reqDto.getContent())
                .date(reqDto.getDate())
                .build();

        return todoListMapper.save(todoList);
    }

    public int updateTodoList(ReqUpdateTodoListDto reqDto) {
        TodoList todoList = TodoList.builder()
                .todoId(reqDto.getTodoId())
                .content(reqDto.getContent())
//                .date(reqDto.getDate())
                .build();
        return todoListMapper.update(todoList);
    }

    public List<RespGetTodoListDto> getTodoList() {
        List<RespGetTodoListDto> respDtos = new ArrayList<>();

        List<TodoList> todoLists = todoListMapper.findTodoListByTodoId();

        for(TodoList todo : todoLists) {
            RespGetTodoListDto dto = RespGetTodoListDto.builder()
                    .todoId(todo.getTodoId())
                    .content(todo.getContent())
                    .state(todo.getState())
                    .date(todo.getDate())
                    .build();
            respDtos.add(dto);
        }
        return respDtos;
    }

    public int deleteTodoList(int todoId) {
        return todoListMapper.delete(todoId);
    }

    public RespGetTodoDto getTodo(int todoId) {

        TodoList getTodo = todoListMapper.findTodoById(todoId);

        return RespGetTodoDto.builder()
                .todoId(getTodo.getTodoId())
                .state(getTodo.getTodoId())
                .content(getTodo.getContent())
                .build();
    }

    public List<RespGetTodoListDto> getTodoListDtoBystate (int state) {
        List<RespGetTodoListDto> todolistDtos = new ArrayList<>();

        List<TodoList> getLists = todoListMapper.findTodoListByState(state);

        for(TodoList todoList : getLists) {
            RespGetTodoListDto dtos = RespGetTodoListDto.builder()
                    .todoId(todoList.getTodoId())
                    .content(todoList.getContent())
                    .date(todoList.getDate())
                    .state(todoList.getState())
                    .build();

            todolistDtos.add(dtos);
        }
        return todolistDtos;
    }

    public int setCheckboxState(ReqSetCheckboxStateDto reqDto) {
        TodoList todoList = TodoList
                .builder()
                .todoId(reqDto.getTodoId())
                .state(reqDto.getState() == 0 ? 1 : 0)
                .build();

        return todoListMapper.updateCheckboxState(todoList);
    }
}