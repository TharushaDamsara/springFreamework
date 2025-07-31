package edu.ijse.config;

import edu.ijse.bean.Bean1;
import edu.ijse.bean.Bean2;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration

public class AppConfig2 {
    @Bean
public Bean2 bean1(){
    return new Bean2();
}

}
