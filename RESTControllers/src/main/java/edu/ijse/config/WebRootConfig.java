package edu.ijse.config;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

@Configuration
@ComponentScan({"edu.ijse.bean","edu.ijse.controller"})

@EnableWebMvc
public class WebRootConfig {
}
