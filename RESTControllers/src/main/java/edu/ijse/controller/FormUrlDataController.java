package edu.ijse.controller;

import edu.ijse.dto.UserDto;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("form")
public class FormUrlDataController {
    @PostMapping(path = "save")
    public String save(@ModelAttribute UserDto dto){

        System.out.println(dto.getUid());
        System.out.println(dto.getUname());
        System.out.println(dto.getUaddress());

        System.out.println(dto);
        return "saved";
    }
}
