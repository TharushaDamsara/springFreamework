package edu.ijse.controller;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("hello")
public class HelloController {
    @GetMapping(path = "get")
    public String getMapping(){
        return "Get";
    }
    @GetMapping(path = "get2")
    public String getMapping2(){
        return "Get2";
    }

    @PostMapping
    public String postMapping(){
        return "Post";
    }
    @DeleteMapping
    public String deleteMapping(){
        return "Delete";
    }
    @PutMapping
    public String putMapping(){
        return "put";
    }
    @PatchMapping
    public String PatchMapping(){
        return "Patch";
    }
}
