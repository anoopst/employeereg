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
  page = 1;
  pageSize = 5;  
  collectionSize;

  constructor(private empService: EmpServiceService) { }

  ngOnInit() {
    this.empService.listEmployees().subscribe({
      next: employees => {
        this.employees = employees;
        this.sort();
        this.collectionSize = employees.length;
      },
      error: err => console.log(err)
    });
    
  }

  sort() {
    if (this.employees.length > 1) {
      this.employees.sort((a, b): number => {
        if(a.firstName > b.firstName)  {
          return 1;
        } else if(a.firstName < b.firstName) {
          return -1;
        }
        return 0;
      });
    }
  }

  get getEmployees(): Employee[] {
    return this.employees
      .map((employee, i) => ({id: i + 1, ...employee}))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }
}
