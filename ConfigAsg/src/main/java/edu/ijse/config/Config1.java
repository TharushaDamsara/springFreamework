package edu.ijse.config;

import edu.ijse.bean.Bean5;
import org.springframework.context.annotation.*;

@Configuration
@ComponentScan("edu.ijse.bean")
@Import({Config2.class,Config3.class})
public class Config1 {
}
