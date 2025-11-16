package com.shiftattendance.system;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.TimeZone;

@SpringBootApplication
public class ShiftAndAttendanceSystemApplication {
	public static void main(String[] args) {
        TimeZone.setDefault(TimeZone.getTimeZone("UTC"));
        System.out.println("JVM user.timezone: " + System.getProperty("user.timezone"));
		SpringApplication.run(ShiftAndAttendanceSystemApplication.class, args);
	}
}
