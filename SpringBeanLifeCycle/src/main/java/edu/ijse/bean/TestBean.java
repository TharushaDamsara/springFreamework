package edu.ijse.bean;


import org.springframework.beans.factory.DisposableBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

@Component
@Scope("prototype")

public class TestBean implements DisposableBean {
    public TestBean() {
        System.out.println("contractor");
    }

    @Override
    public void destroy() throws Exception {
        System.out.println("destroy");
    }
}
