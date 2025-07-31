package edu.ijse.bean;

import org.springframework.beans.BeansException;
import org.springframework.beans.factory.*;
import org.springframework.context.ApplicationContext;
import org.springframework.context.ApplicationContextAware;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Component;

@Component
public class SpringBean3 implements DisposableBean, BeanNameAware, BeanFactoryAware, ApplicationContextAware, InitializingBean {
    public SpringBean3() {
        System.out.println("spring bean3");
    }

    @Override
    public void setBeanFactory(BeanFactory beanFactory) throws BeansException {
        System.out.println("setBean Factory");

    }

    @Override
    public void setBeanName(String name) {
        System.out.println("setBeanname");

    }
    @Override
    public void destroy() throws Exception {
        System.out.println("destroy");
    }

    @Override
    public void setApplicationContext(ApplicationContext applicationContext) throws BeansException {
        System.out.println("afterAppContetxt");
    }

    @Override
    public void afterPropertiesSet() throws Exception {
        System.out.println("Init");
    }
    @Bean
    public SpringBean1 bean1(){
        SpringBean2 bean1 = bean2();
        SpringBean2 bean2 = bean2();

        System.out.println(bean1);
        System.out.println(bean2);


        return new SpringBean1();
    }

    @Bean
    public SpringBean2 bean2(){
        return new SpringBean2();
    }
}
