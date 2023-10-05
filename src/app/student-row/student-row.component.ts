import { Component, EventEmitter, Input, Output } from '@angular/core';
import { StudentDto } from '../swagger';

@Component({
  selector: 'app-student-row',
  templateUrl: './student-row.component.html',
  styleUrls: ['./student-row.component.scss']
})
export class StudentRowComponent {
  @Input() clazzes: string[] = [];
  @Input() student: StudentDto[] = [];

  @Output() moveStudent = new EventEmitter<string>();

  moveStudentTo(clazzName: string, selectedStudent: StudentDto): void {
    this.moveStudent.emit(clazzName + "_" + selectedStudent.id + '_' + selectedStudent.clazzName + '_' + selectedStudent.firstname + '_' + selectedStudent.lastname);
  }

  getAgeString(student: StudentDto): string {
    return `${Math.floor(student.age / 10) * 10}+`;
  }


  toggleIsRegistered(student: StudentDto): void {
    student.isRegistered = !student.isRegistered;
  }
  updateAge(): void {
    console.log("updateAge");
  }
}
