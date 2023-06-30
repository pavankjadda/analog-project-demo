import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { toSignal } from '@angular/core/rxjs-interop';
import { effect } from '@angular/core';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  template: `
    <h1>Employees</h1>
    <ul>
      <li *ngFor="let employee of employees()">
        {{ employee.firstName }}
      </li>
    </ul>
  `,
})
export class MainComponent {
  employeeService = inject(EmployeeService);
  employees = toSignal(this.employeeService.getEmployees());

  constructor() {
    effect(() => {
      console.log('result loaded');
    });
  }
}
