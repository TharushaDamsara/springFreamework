package edu.ijse.bean;

import org.springframework.beans.BeansException;
import org.springframework.beans.factory.*;
import org.springframework.context.ApplicationContext;
import org.springframework.context.ApplicationContextAware;

public class SpringBean2 implements DisposableBean, BeanNameAware, BeanFactoryAware, ApplicationContextAware, InitializingBean {
    public SpringBean2() {
        System.out.println("spring bean2");
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
}
