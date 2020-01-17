import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Employee } from './employee';


@Injectable({
  providedIn: 'root'
})
export class EmpServiceService {

  constructor(private http: HttpClient) { }

  registerEmployee(empData: Employee) {
    console.log("Registering employee" + JSON.stringify(empData));
    return this.http
    .post('http://localhost:8080/emp/register', empData)    
  }

  listEmployees() {
    return this.http
    .get('http://localhost:8080/emp/list')
    .pipe(
      map(responseData => {
        const employees = [];
        for (const key in responseData) {
          if (responseData.hasOwnProperty(key)) {
            employees.push({ ...responseData[key], id: key });
          }
        }
        return employees;
      })
    );    
  }
}
