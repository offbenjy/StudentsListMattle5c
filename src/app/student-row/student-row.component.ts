import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-student-row',
  templateUrl: './student-row.component.html',
  styleUrls: ['./student-row.component.scss']
})
export class StudentRowComponent {
  @Input() student: any; // Input property to receive student data
  @Output() moveStudent = new EventEmitter<string>();

  getAgeString(): void {
    // Implement logic to convert age to "20+", "30+", etc.
    // Example: return `${Math.floor(this.student.age / 10) * 10}+`;
  }

  changeRegistered(): void {
    // Implement logic to toggle the registered status of the student
  }

  updateAge(): void {
    // Implement logic to update the age of the student
  }
}
