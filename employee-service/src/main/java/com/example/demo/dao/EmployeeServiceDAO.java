package com.example.demo.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entity.Employee;

@Repository
public interface EmployeeServiceDAO extends JpaRepository<Employee, Integer>{

	@Query("SELECT e from Employee e where firstName=?1 and lastName=?2")
	Employee findByFirstNameAndLastName(String firstName, String lastName);
}
