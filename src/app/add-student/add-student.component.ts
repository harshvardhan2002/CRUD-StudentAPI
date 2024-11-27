import { Component } from '@angular/core';
import { FormGroup,FormControl,FormsModule } from '@angular/forms';
import { StudentService } from '../services/student.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent {
  newStudentForm=new FormGroup({
    rollNo:new FormControl(),
    name:new FormControl(),
    age:new FormControl(),
    email:new FormControl(),
    date:new FormControl(),
    isMale:new FormControl()
  })
  constructor(private studentService:StudentService, private router:Router){}
  addNewStudent() {
    this.studentService.addStudent(this.newStudentForm.value).subscribe(
      (data) => {
        alert('Student added successfully!');
        this.router.navigate(['/']); // Redirect to the students list page
      },
      (error) => {
        console.error('Error adding student:', error);
      }
    );
  }
  
}
