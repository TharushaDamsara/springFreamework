package edu.ijse.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("ex")
public class ExtractMappingController {
    @GetMapping(path = "get")
    public String get(){
        return "Get";
    }
    @GetMapping(path = "get/1")
    public String get2(){
        return "Get2";
    }
    @GetMapping(path = "get/1/1")
    public String get3(){
        return "Get3";
    }
}
