package com.example.demo.controller;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;

import com.example.demo.entity.Employee;
import com.example.demo.exception.EmployeeException;
import com.example.demo.service.EmployeeService;
import com.fasterxml.jackson.databind.ObjectMapper;

@RunWith(SpringRunner.class)
@WebMvcTest(EmployeeServiceController.class)
public class EmployeeServiceControllerTest {

	@Autowired
	MockMvc mvc;

	@MockBean
	EmployeeService employeeService;

	@Test
	public void testRegisterEmployeeSuccess() throws Exception {
		Employee emp = Employee.builder().id(1).firstName("Anoop").lastName("Singri").dob(new Date()).department("IT").gender("Male").build();
		ObjectMapper mapper = new ObjectMapper();
		when(employeeService.registerEmployee(any(Employee.class))).thenReturn(new Employee());
		mvc.perform(post("/emp/register").contentType(MediaType.APPLICATION_JSON).content(mapper.writeValueAsBytes(emp)))
				.andExpect(status().isOk());
	}
	
	@Test
	public void testRegisterEmployeeBadRequest() throws Exception {
		Employee emp = Employee.builder().id(1).firstName("Anoop").lastName("Singri").dob(new Date()).department("IT").gender("Male").build();
		ObjectMapper mapper = new ObjectMapper();
		when(employeeService.registerEmployee(any(Employee.class))).thenThrow(new EmployeeException("Employee already exists"));
		mvc.perform(post("/emp/register").contentType(MediaType.APPLICATION_JSON).content(mapper.writeValueAsBytes(emp)))
				.andExpect(status().is4xxClientError());
	}
	
	@Test
	public void testListEmployees() throws Exception {
		List<Employee> employees = new ArrayList<>();
		Employee emp = Employee.builder().id(1).firstName("Anoop").lastName("Singri").dob(new Date()).department("IT").gender("Male").build();
		employees.add(emp);
		
		when(employeeService.getEmployees()).thenReturn(employees);
		
		mvc.perform(get("/emp/list"))
		.andExpect(status().isOk());
	}

}
