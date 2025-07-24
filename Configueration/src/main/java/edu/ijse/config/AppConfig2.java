package edu.ijse.config;

import edu.ijse.bean.Bean1;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

@Configuration

public class AppConfig {
    @Bean
public Bean1 bean1(){
    return new Bean1();
}

}
