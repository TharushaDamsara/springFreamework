package edu.ijse.bean;

import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Component;

@Component
@Primary
public class Girl implements Agreement {
     Girl() {
        System.out.println("girl constructor");
    }

    @Override
  public void chat(){
        System.out.println("chat");
    }
}
