import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentService } from './services/student.service';
import { ShowStudentsComponent } from './show-students/show-students.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { UpdateStudentComponent } from './update-student/update-student.component';
const routes: Routes = [
  
  { 
    path:'', 
    component:ShowStudentsComponent 
  },
  { 
    path:'addStudent', 
    component:AddStudentComponent 
  },
  {
    path:'updateStudent/:id',
    component:UpdateStudentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
