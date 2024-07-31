package com.toyproject.todolist.controller;

import com.toyproject.todolist.dto.ReqRegisterTodoListDto;
import com.toyproject.todolist.dto.ReqUpdateTodoListDto;
import com.toyproject.todolist.service.TodoListServiceImpl;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@Slf4j
@CrossOrigin
@RestController
@RequestMapping("/api/v1")
public class TodoListController {

    @Autowired
    private TodoListServiceImpl todoListService;

    // 등록
    @PostMapping("/todo")
    public ResponseEntity<?> registerApi(@RequestBody ReqRegisterTodoListDto reqDto) {
        log.info("{}",reqDto);
        return ResponseEntity.ok().body(todoListService.registerTodoList(reqDto));
    }

    // 수정
    @PutMapping("/todo/{todoId}")
    public ResponseEntity<?> modifyApi(@PathVariable int todoId, @RequestBody ReqUpdateTodoListDto reqDto) {
        log.info("{}", reqDto);
        return ResponseEntity.ok().body(todoListService.updateTodoList(reqDto));
    }

    // 다건 조회
    @GetMapping("/todolist")
    public ResponseEntity<?> getListApi() {
        return ResponseEntity.ok().body(todoListService.getTodoList());
    }

    // 단건 조회
    @GetMapping("/todo/{todoId}")
    public ResponseEntity<?> getApi(@PathVariable int todoId) {
        log.info("{}", todoId);
        return ResponseEntity.ok().body(todoListService.getTodo(todoId));
    }

    // 삭제
    @DeleteMapping("/todo/{todoId}")
    public ResponseEntity<?> removeApi(@PathVariable int todoId) {
        log.info("{}", todoId);
        return ResponseEntity.ok().body(todoListService.deleteTodoList(todoId));
    }


}
