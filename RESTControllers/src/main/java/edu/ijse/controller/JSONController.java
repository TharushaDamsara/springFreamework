package edu.ijse.controller;

import edu.ijse.dto.UserDto;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("json")
public class JSONController {
    @PostMapping(value = "save",consumes = MediaType.APPLICATION_JSON_VALUE)
    public String save(@RequestBody UserDto dto){
        System.out.println(dto);
        System.out.println(dto.getUid());
        System.out.println(dto.getUname());
        System.out.println(dto.getUaddress());
        return "save";
    }
    @GetMapping(value = "get",produces = MediaType.APPLICATION_JSON_VALUE)
    public UserDto get(){
        UserDto dto = new UserDto();
        dto.setUid("u005");
        dto.setUname("siripala");
        dto.setUaddress("gampaha");

        return dto;
    }
}
