package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.dao.EmployeeServiceDAO;
import com.example.demo.entity.Employee;

@Service
public class EmployeeServiceImpl implements EmployeeService {
	
	@Autowired
	EmployeeServiceDAO empDao;

	@Override
	public List<Employee> getEmployees() {
		return empDao.findAll();
	}

	@Override
	public Employee registerEmployee(Employee employee) {	
		System.out.println("register employee-> Servcie ");
		return empDao.save(employee);
	}

}
