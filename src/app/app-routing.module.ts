import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListEmployeeComponent } from './list-employee/list-employee.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EditTutorialComponent } from './edit-tutorial/edit-tutorial.component';


const routes: Routes = [
  {path:"",redirectTo:"humanResource",pathMatch:"full"},
  {path:"humanResource",component:ListEmployeeComponent},
  {path:"add",component:AddEmployeeComponent},
  {path:"edit/:id",component:EditTutorialComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
