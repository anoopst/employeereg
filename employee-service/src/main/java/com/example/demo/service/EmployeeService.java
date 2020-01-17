package com.example.demo.service;

import java.util.List;

import com.example.demo.entity.Employee;
import com.example.demo.exception.EmployeeException;

public interface EmployeeService {
	
	List<Employee> getEmployees();
	Employee registerEmployee(Employee employee) throws EmployeeException;

}
