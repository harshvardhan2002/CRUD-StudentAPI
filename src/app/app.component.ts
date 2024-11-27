import { Component } from '@angular/core';
import { StudentService } from './services/student.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'student-app';
  studentData:any=''
  constructor(private studentService:StudentService){
    studentService.getStudents().subscribe((data)=>{
      this.studentData=data;
      console.log(this.studentData)
    })
  }
}
