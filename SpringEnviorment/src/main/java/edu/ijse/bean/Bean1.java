package edu.ijse.bean;

import org.springframework.beans.factory.InitializingBean;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
public class Bean1 implements InitializingBean {
    @Value("${os.name}")
    private String os;

    @Value("${os.arch}")
    private String osarch;

    @Value("${db.name}")
    private String db;

    @Override
    public void afterPropertiesSet() throws Exception {
        System.out.println(os);
        System.out.println(osarch);
        System.out.println(db);
    }
}
