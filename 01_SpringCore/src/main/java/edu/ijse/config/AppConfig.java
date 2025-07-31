package edu.ijse.config;

import edu.ijse.bean.MyConnection;
import org.springframework.beans.factory.config.ConfigurableBeanFactory;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Scope;


@Configuration
@ComponentScan(basePackages = "edu.ijse.bean")

public class AppConfig {
@Bean("http")
@Scope("prototype")
    public MyConnection myConnection(){
    System.out.println("constructor");
    return new MyConnection();
}
}