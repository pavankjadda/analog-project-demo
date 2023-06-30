import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private http = inject(HttpClient);

  getEmployees() {
    return this.http.get<Employee[]>(
      'https://my-json-server.typicode.com/pavankjadda/typicode-data/employees'
    );
  }
}

export interface Employee {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  age: number;
}
