package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.dao.EmployeeServiceDAO;
import com.example.demo.entity.Employee;
import com.example.demo.exception.EmployeeException;

@Service
public class EmployeeServiceImpl implements EmployeeService {

	@Autowired
	EmployeeServiceDAO empDao;

	@Override
	public List<Employee> getEmployees() {
		return empDao.findAll();
	}

	@Override
	public Employee registerEmployee(Employee employee) throws EmployeeException {
		Employee existingEmp = empDao.findByFirstNameAndLastName(employee.getFirstName(), employee.getLastName());
		if (existingEmp == null) {
			return empDao.save(employee);
		} else {
			throw new EmployeeException("Employee already exists");
		}
	}

}
