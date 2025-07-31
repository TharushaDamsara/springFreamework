package edu.ijse.bean;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Component;

@Component
public class Boy {
   @Autowired
   @Qualifier("girl2")
    Agreement girl;
    public Boy() {
        System.out.println("boy constructor");
    }

   public void chatwithgirl(){
        girl.chat();

    }
}
