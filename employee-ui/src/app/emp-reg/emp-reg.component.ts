import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';

import {Employee} from '../employee';
import { EmpServiceService } from '../emp-service.service';

@Component({
  selector: 'app-emp-reg',
  templateUrl: './emp-reg.component.html',
  styleUrls: ['./emp-reg.component.css']
})
export class EmpRegComponent implements OnInit {
  genders: ['male', 'female'];
  empForm: FormGroup;
  employee = new Employee();
  constructor(private fb: FormBuilder, private empService:EmpServiceService) { }

  ngOnInit() {
    this.empForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: '',
      gender: ['', [Validators.required]],      
      department: ['', [Validators.required]]
    });
    console.log(this.empForm);
  }

  save() {
    console.log(this.empForm);
    let emp = new Employee();
    emp.firstName = this.empForm.value.firstName;
    emp.lastName = this.empForm.value.lastName;
    emp.gender = this.empForm.value.gender;
    emp.department = this.empForm.value.department;
    emp.dob = new Date();
    
    this.empService.registerEmployee(emp);

  }

}
