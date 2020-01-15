package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.Employee;
import com.example.demo.service.EmployeeService;

@RestController
@RequestMapping("/emp")
@CrossOrigin
//@Api
public class EmployeeServiceController {
	
	@Autowired
	EmployeeService employeeService;
	
	@PostMapping(value="/register")	
	public ResponseEntity<Void> registerEmployee(@RequestBody Employee employee) {
		System.out.println("Register Employee");
		employeeService.registerEmployee(employee);
		return new ResponseEntity<Void>(HttpStatus.OK);
	}

	@GetMapping(value="/list")
	public ResponseEntity<List<Employee>> listEmployees() {
		ResponseEntity<List<Employee>> response = new ResponseEntity<>(employeeService.getEmployees(), HttpStatus.OK);
		return response;
	}
}
