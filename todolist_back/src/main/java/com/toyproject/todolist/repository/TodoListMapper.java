package com.toyproject.todolist.repository;

import com.toyproject.todolist.entity.TodoList;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface TodoListMapper {
    int save(TodoList todoList);
    List<TodoList> findTodoListByTodoId(String date);
    TodoList findTodoById(int todoId);
    int delete(int todoId);
    int update(TodoList todoList);
    List<TodoList> findTodoListByState(int state);
    int updateCheckboxState(TodoList todoList);
}