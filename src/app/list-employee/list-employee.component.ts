import { Component, OnInit } from '@angular/core';
import { Employee } from '../model/employee.model';
import { EmployeeServiceService } from '../employee-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit{

constructor(private employeeService: EmployeeServiceService, private router: Router, private route: ActivatedRoute){}


employees?: Employee[];


currentEmployee: Employee = {
  
    first_name: '',
    last_name: '',
    dob: new Date,
    hireDate:new Date,

}



ngOnInit(): void {
    this.getAllEmployees()
}

getAllEmployees():void{
  this.employeeService.getAll().subscribe({
    next: (data)=>{
      this.employees = data
      console.log(data)
    },
    error: (e)=>console.log(e)
  })
}

// getEmployeeById(id: any): void{
//   this.employeeService.get(id).subscribe({
//     next: (data)=>{
//         this.currentEmployee = data;
//         console.log(data);
//     },
//     error: (e)=>console.log(e)
//   }
    
//   );
// }

deleteById(id: any): void{
  
  
  this.employeeService.deleteById(id).subscribe({
    next: (data)=>{
      console.log("delete");
      this.getAllEmployees();
      
    },
    error: (e)=>console.log(e)
  })
}


  

}

