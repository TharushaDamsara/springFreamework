package edu.ijse.config;

import edu.ijse.bean.SpringBean1;
import edu.ijse.bean.SpringBean2;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

@Configuration
@ComponentScan(basePackages = "edu.ijse.bean")
public class AppConfig {
    //interbean dependencies saticefied
//    @Bean
//    public SpringBean1 bean1(){
//        SpringBean2 springBean1 = bean2();
//        SpringBean2 springBean2 = bean2();
//        System.out.println(springBean1);
//        System.out.println(springBean2);
//        return new SpringBean1();
//    }
//    @Bean
//    public SpringBean2 bean2(){
//        return new SpringBean2();
//    }
}
