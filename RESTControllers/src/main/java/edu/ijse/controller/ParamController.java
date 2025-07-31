package edu.ijse.controller;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("param")
public class ParamController {
    @GetMapping(params = {"id"})

    public String get(@RequestParam ("id") String id){
        return id;
    }
}
