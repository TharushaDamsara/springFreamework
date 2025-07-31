package edu.ijse.di;

import org.springframework.stereotype.Component;

@Component
public class Test1 implements Di{
    public Test1() {
        System.out.println("test1 const");
    }
    @Override
    public void sayHello() {
        System.out.println("halo test1");
    }
}
