package edu.ijse.config;

import edu.ijse.bean.Bean3;
import edu.ijse.bean.Bean4;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class Config3 {
    @Bean
    public Bean3 bean3(){
        return new Bean3();
    }
    @Bean
    public Bean4 bean4(){
        return new Bean4();
    }
}
