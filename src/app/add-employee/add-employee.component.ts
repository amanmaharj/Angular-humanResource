import { Component } from '@angular/core';
import { Employee } from '../model/employee';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {
    employee: Employee = {
      first_name:"",
      last_name:"",
      dob: new Date(),
      hireDate: new Date()
    }
}
