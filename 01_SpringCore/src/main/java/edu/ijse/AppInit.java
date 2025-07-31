package edu.ijse;

import edu.ijse.bean.MyConnection;
import edu.ijse.bean.SpringBean;
import edu.ijse.bean.TestBean1;
import edu.ijse.bean.TestBean2;
import edu.ijse.config.AppConfig;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

public class AppInit {
    public static void main(String[] args) {
        AnnotationConfigApplicationContext context = new AnnotationConfigApplicationContext();
        context.register(AppConfig.class);
        context.refresh();

        SpringBean bean = context.getBean(SpringBean.class);
        SpringBean springBean = (SpringBean) context.getBean("springBean");
        bean.test();

        System.out.println(bean);
        System.out.println("Bean1");
        System.out.println(springBean);
        System.out.println("Bean2");

        TestBean1 bean2 = (TestBean1) context.getBean("testBean1", TestBean1.class);
        System.out.println(bean2);
        System.out.println("Bean3");

        TestBean2 bean3 = (TestBean2) context.getBean("ubetta");

        MyConnection myConnection = (MyConnection) context.getBean("http");
        System.out.println("myconnection class :"+myConnection);

        MyConnection myConnection2 = (MyConnection) context.getBean("http");
        System.out.println(myConnection2);

//        Runtime.getRuntime().addShutdownHook(new Thread(){
//            @Override
//            public void run() {
//                context.close();
//                if (context.isClosed()){
//                    System.out.println("praba ivarayi praba ivarayi");
//                }
//            }
//        });

        context.registerShutdownHook();
    }
}
