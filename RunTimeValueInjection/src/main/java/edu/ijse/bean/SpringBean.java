package edu.ijse.bean;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
public class SpringBean {
    @Autowired(required = false)
    public SpringBean(@Value("pky") String name,@Value("1") int id,@Value("true") boolean ispgy) {

        System.out.println("bean1");
        System.out.println(id);
        System.out.println(name);
        System.out.println(ispgy);
    }
    @Autowired(required = false)
    public SpringBean(@Value("pky")String name,@Value("1") int id,@Value("hkpn") String htt){
        System.out.println("bean1 const2");
        System.out.println("bean1");
        System.out.println(id);
        System.out.println(name);

        System.out.println(htt);
    }
    }

