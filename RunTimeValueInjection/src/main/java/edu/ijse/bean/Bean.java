package edu.ijse.bean;

import org.springframework.beans.factory.InitializingBean;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
public class Bean implements InitializingBean {
    @Value("jwejk@#3*ff")
    private String key;

    public Bean() {
        System.out.println(key);
    }

    @Override
    public void afterPropertiesSet() throws Exception {
        System.out.println(key);
    }
}
