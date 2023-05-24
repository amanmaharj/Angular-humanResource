import { Component, Input, OnInit } from '@angular/core';
import { EmployeeServiceService } from '../employee-service.service';
import { Employee } from '../model/employee.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-tutorial',
  templateUrl: './edit-tutorial.component.html',
  styleUrls: ['./edit-tutorial.component.css']
})
export class EditTutorialComponent implements OnInit{

  constructor(private employeeService : EmployeeServiceService, private router: Router, private route: ActivatedRoute){}
  
  @Input() currentEmployee: Employee = {
    first_name : "",
    last_name: "",
    dob: new Date(),
    hireDate: new Date()

  }


  

  ngOnInit(): void {
    const id = this.route.snapshot.params["id"]
    this.getEmployeeById(id)
}


  getEmployeeById(id: any): void{
    this.employeeService.get(id).subscribe({
      next: (data)=>{
          this.currentEmployee = data;
          console.log(data);
      },
      error: (e)=>console.log(e)
    }
      
    );
  }

  upDateEmployee(): void{
    this.employeeService.update(this.currentEmployee.id, this.currentEmployee).subscribe({
      next : (data)=>{
        this.router.navigate(['/'])
       
      },
      error: (e)=> console.error(e)
    })
  }

}
