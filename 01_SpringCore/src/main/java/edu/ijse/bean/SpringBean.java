package edu.ijse.bean;

import org.springframework.stereotype.Component;

@Component
public class SpringBean {
    public SpringBean() {
        System.out.println("Spring bean created");
    }

    public void test() {
        System.out.println("obj created");
    }
}
