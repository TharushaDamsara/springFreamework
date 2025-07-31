package edu.ijse.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("wild")
public class WildCardmapping {
@GetMapping("*/get")
    public String get(){
    return "get";
}
@GetMapping("get/*")
public String get2(){
    return "get2";
}
}
