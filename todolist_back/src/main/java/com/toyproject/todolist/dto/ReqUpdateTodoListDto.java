package com.toyproject.todolist.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Builder
@Data
public class ReqUpdateTodoListDto {
    private int todoId;
    private String content;
//    private String date;
//    private int state;
}
