import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmpServiceService } from '../emp-service.service';

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css']
})
export class EmpListComponent implements OnInit {
  employees: Employee[] = [];

  constructor(private empService: EmpServiceService) { }

  ngOnInit() {
    this.empService.listEmployees().subscribe({
      next: employees => {
        this.employees = employees;        
      },
      error: err => console.log(err);
    });
  }

}
