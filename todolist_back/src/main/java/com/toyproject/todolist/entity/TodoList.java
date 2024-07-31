package com.toyproject.todolist.entity;

import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class TodoList {
    private int todoId;
    private String content;
    private String date;
    private int state;
}
