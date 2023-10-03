import { Component, EventEmitter, Input, Output } from '@angular/core';
import { StudentDto } from '../swagger';

@Component({
  selector: 'app-app-student-row-card',
  templateUrl: './app-student-row-card.component.html',
  styleUrls: ['./app-student-row-card.component.scss']
})
export class AppStudentRowCardComponent {

  @Input() clazzes: string[] = [];
  @Input() student: StudentDto[] = []; 
  
  @Output() moveStudent = new EventEmitter<string>();

  moveStudentTo(clazzName :string, selectedStudent: StudentDto):void{
    this.moveStudent.emit(clazzName+"_"+selectedStudent.id+'_'+selectedStudent.clazzName);
  }
  getAgeString(student: StudentDto): string {
     return `${Math.floor(student.age / 10) * 10}+`;
  }
  toggleIsRegistered(student: StudentDto): void {   
    student.isRegistered = !student.isRegistered;

  }
  updateAge(): void {
    
  }
}
