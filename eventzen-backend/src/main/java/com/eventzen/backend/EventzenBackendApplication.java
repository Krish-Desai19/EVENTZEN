package com.eventzen.backend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages = "com.eventzen.backend")
public class EventzenBackendApplication {

    public static void main(String[] args) {
        SpringApplication.run(EventzenBackendApplication.class, args);
    }

}
