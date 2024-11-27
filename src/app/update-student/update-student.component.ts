import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit {
  id: any;
  studentData: any;
  studentForm = new FormGroup({
    rollNo: new FormControl(),
    name: new FormControl(),
    age: new FormControl(),
    email: new FormControl(),
    date: new FormControl(),
    isMale: new FormControl()
  });

 constructor(private studentService: StudentService, private route: ActivatedRoute, private fb: FormBuilder, private router: Router){}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.studentService.getStudentById(this.id).subscribe(
        (data: any) => {
            this.studentData = data[0];
            console.log('Fetched student data:', this.studentData);

            this.studentForm.patchValue({
                rollNo: this.studentData.rollNo,
                name: this.studentData.name,
                age: this.studentData.age,
                email: this.studentData.email,
                date: this.studentData.date,
                isMale: this.studentData.isMale
            });
        },
        (error) => {
            console.error('Error fetching student data:', error);
        }
    );
  }

  updateStudent() {
    if (this.studentForm.valid) {
      const formValue = this.studentForm.value;
      this.studentService.updateStudent(this.id, formValue).subscribe(
        () => {
          alert('Student updated successfully');
            this.router.navigateByUrl('');
            
        }
      );
    } 
  }

}
