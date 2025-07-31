package edu.ijse.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("char")
public class CharacterMappingController {
    @GetMapping(path = "item/I???")
    public String say(){
        return "ane pko helo";
    }
    @GetMapping(path = "????/search")
    public String search(){
        return "Searched sucsessfully";
    }

}
