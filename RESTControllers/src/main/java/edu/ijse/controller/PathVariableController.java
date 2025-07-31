package edu.ijse.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("path")
public class PathVariableController {
@GetMapping(path = "{name}/{id}")
    public String path(@PathVariable("name") String name ,@PathVariable("id") String id ){
    return "Name :"+name +" ,"+ "ID :"+id;
}
@GetMapping(path = "item/{code}/branch/{city}")
    public String get(@PathVariable("code") String code,@PathVariable("city") String city){
    return "code : "+code+" , "+"City :"+city;
}
}

