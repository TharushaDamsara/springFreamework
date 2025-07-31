package edu.ijse.di;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class Test2 implements Di2  {
    @Autowired
    Di di;
//    public Test2(Di di) {
//        this.di =di;
//        System.out.println("cont2");  //constructor through inject
//    }


//    public Test2() {
//        System.out.println("const");
//    }


    public void test() {
      di.sayHello();
    }

    @Override
    public void inject(Di di) {
        this.di = di;
    }
}
