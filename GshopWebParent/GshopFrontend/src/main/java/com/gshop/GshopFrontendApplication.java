package com.gshop;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;

@SpringBootApplication
@EntityScan({"com.gshop.common.entity"})
public class GshopFrontendApplication {

	public static void main(String[] args) {
		SpringApplication.run(GshopFrontendApplication.class, args);
	}

}
