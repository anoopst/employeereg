import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Employee } from '../employee';
import { EmpServiceService } from '../emp-service.service';
import { NgbDatepickerConfig } from '@ng-bootstrap/ng-bootstrap';

import { Router } from '@angular/router';

@Component({
  selector: 'app-emp-reg',
  templateUrl: './emp-reg.component.html',
  styleUrls: ['./emp-reg.component.css']
})
export class EmpRegComponent implements OnInit {
  genders: ['male', 'female'];
  empForm: FormGroup;
  employee = new Employee();
  alert: string;
  alertType: string;
  constructor(private fb: FormBuilder,
    private empService: EmpServiceService,
    private router: Router,
    dateConfig: NgbDatepickerConfig) {
    this.configCalDates(dateConfig);
  }

  ngOnInit() {
    let currentDate = new Date();
    this.empForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required]],
      gender: ['', Validators.required],
      department: ['', Validators.required],
      dob: [{ 'day': currentDate.getDate(), 'month': 1, 'year': currentDate.getFullYear() - 10 }, Validators.required]
    });
  }

  configCalDates(dateConfig: NgbDatepickerConfig) {
    let currentDate = new Date();
    dateConfig.minDate = { 'day': 1, 'month': 1, 'year': currentDate.getFullYear() - 60 };
    dateConfig.maxDate = { 'day': currentDate.getDate(), 'month': 1, 'year': currentDate.getFullYear() - 10 };
  }
  save() {
    console.log(this.empForm);
    let emp = new Employee();
    emp.firstName = this.empForm.value.firstName;
    emp.lastName = this.empForm.value.lastName;
    emp.gender = this.empForm.value.gender;
    emp.department = this.empForm.value.department;
    let dob = this.empForm.value.dob;
    emp.dob = dob.day + '-' + dob.month + '-' + dob.year;    
    
    this.empService.registerEmployee(emp).subscribe({
      next: successMsg => {
        console.log(successMsg);
        this.handleSuccess();
      },
      error: errMsg => {
        console.log(errMsg);
        this.alertType = 'danger';  
        this.alert = 'Employee already exists';       
      }
    });
   
    

  }

  handleSuccess() {
    this.alert = 'Employee successfully registered';        
        this.alertType = 'success';    
        setTimeout(() => {
          this.router.navigate(['/main']);
        }, 2000);
  }

  clearAlerts() {
    this.alert= null;
    this.alertType = null;
  }

}
