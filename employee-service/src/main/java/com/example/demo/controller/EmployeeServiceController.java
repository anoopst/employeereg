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
import com.example.demo.exception.EmployeeException;
import com.example.demo.service.EmployeeService;

@RestController
@RequestMapping("/emp")
@CrossOrigin
public class EmployeeServiceController {
	
	@Autowired
	EmployeeService employeeService;
	
	@PostMapping(value="/register")	
	public ResponseEntity<String> registerEmployee(@RequestBody Employee employee) {
		try {
			employeeService.registerEmployee(employee);
		} catch (EmployeeException e) {
			return new ResponseEntity<String>("Employee already exists",HttpStatus.BAD_REQUEST);
		}
		return new ResponseEntity<String>(HttpStatus.OK);
	}

	@GetMapping(value="/list")
	public ResponseEntity<List<Employee>> listEmployees() {
		ResponseEntity<List<Employee>> response = new ResponseEntity<>(employeeService.getEmployees(), HttpStatus.OK);
		return response;
	}
}
