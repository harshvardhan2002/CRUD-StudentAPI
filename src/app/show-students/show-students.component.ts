import { Component } from '@angular/core';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-show-students',
  templateUrl: './show-students.component.html',
  styleUrls: ['./show-students.component.css']
})
export class ShowStudentsComponent {
  studentData:any='';
  constructor(private studentService:StudentService){
    this.loadStudents();
  }
  loadStudents(){
    this.studentService.getStudents().subscribe((data:any)=>{
      this.studentData=data
      console.log(this.studentData)
    })
  }
  deleteStudent(id: any) {
    if (confirm('Do you really wish to delete this student?')) {
      this.studentService.deleteStudent(id).subscribe(() => {
        this.loadStudents();
        
      });
      alert('Student deleted successfully.');
    }
  }  
}

