package com.gshop.admin;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;

@SpringBootApplication
@EntityScan({"com.gshop.common.entity", "com.gshop.admin.user"})
public class GshopBackendApplication {
 
	public static void main(String[] args) {
		SpringApplication.run(GshopBackendApplication.class, args);
	}

}
