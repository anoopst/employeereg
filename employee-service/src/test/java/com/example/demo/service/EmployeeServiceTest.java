package com.example.demo.service;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.TestConfiguration;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.context.annotation.Bean;
import org.springframework.test.context.junit4.SpringRunner;

import com.example.demo.dao.EmployeeServiceDAO;
import com.example.demo.entity.Employee;
import com.example.demo.exception.EmployeeException;

@RunWith(SpringRunner.class)
public class EmployeeServiceTest {

	@TestConfiguration
	static class EmployeeServiceImplTestContextConfiguration {
		@Bean
		public EmployeeService employeeService() {
			return new EmployeeServiceImpl();
		}
	}

	@Autowired
	public EmployeeService employeeService;

	@MockBean
	public EmployeeServiceDAO employeeServiceDao;

	@Test
	public void testEmployeeCreatedSuccessfully() throws EmployeeException {
		Employee emp = Employee.builder().firstName("Anoop").lastName("Singri").department("IT").dob(new Date())
				.build();
		when(employeeServiceDao.save(any(Employee.class))).thenReturn(emp);
		Employee regEmp = employeeService.registerEmployee(emp);
		Assert.assertEquals(regEmp.getFirstName(), emp.getFirstName());
	}

	@Test(expected = EmployeeException.class)
	public void testRegisterEmployeeFailed() throws EmployeeException {
		Employee emp = Employee.builder().firstName("Anoop").lastName("Singri").department("IT").dob(new Date())
				.build();
		when(employeeServiceDao.findByFirstNameAndLastName(anyString(), anyString())).thenReturn(emp);
		employeeService.registerEmployee(emp);
	}

	@Test
	public void testListEmployees() {
		List<Employee> employees = new ArrayList<>();
		Employee emp = Employee.builder().id(1).firstName("Anoop").lastName("Singri").dob(new Date()).department("IT").gender("Male").build();
		employees.add(emp);
		when(employeeServiceDao.findAll()).thenReturn(employees);
		Assert.assertNotNull(employeeService.getEmployees());
		
		Assert.assertTrue(employeeService.getEmployees().size() > 0);
	}

}
