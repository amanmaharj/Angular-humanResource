import { Component } from '@angular/core';

import { EmployeeServiceService } from '../employee-service.service';
import { Employee } from '../model/employee.model';
import { formatDate } from '@angular/common';

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
      hireDate: new Date(),
    }
    submitted = false;

    constructor(private employeeService:EmployeeServiceService){}

    saveEmployee(): void{
      const data = {
        first_name : this.employee.first_name,
        last_name : this.employee.last_name,
        dob: this.employee.dob,
        hireDate: this.employee.hireDate
      }

      this.employeeService.storeData(data).subscribe({
        next: (data)=> {
            console.log(data);
            this.submitted = true;
        },
        error: (e) => console.log(e)

      })
    }

    formatDate(date: Date): string {
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      
      return `${year}-${month}-${day}`;
    }

    clearData(){
      this.submitted = false;
      this.employee={
        first_name: "",
        last_name: "",
        
        dob: new Date(),
        hireDate: new Date()
      }
    }
}
