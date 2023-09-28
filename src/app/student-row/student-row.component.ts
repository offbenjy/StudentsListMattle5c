import { Component, EventEmitter, Input, Output } from '@angular/core';
import { StudentDto } from '../swagger';

@Component({
  selector: 'app-student-row',
  templateUrl: './student-row.component.html',
  styleUrls: ['./student-row.component.scss']
})
export class StudentRowComponent {
  @Input() student: StudentDto[] = []; // Input property to receive student data
  @Output() moveStudent = new EventEmitter<string>();

  getAgeString(student: StudentDto): string {
     return `${Math.floor(student.age / 10) * 10}+`;
  }

  changeRegistered(): void {
    // Implement logic to toggle the registered status of the student
  }

  updateAge(): void {
    // Implement logic to update the age of the student
  }
}
