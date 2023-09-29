import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { ClassesService, StudentDto, StudentsService } from './swagger';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit { 
  classes: string[] = [];
  selectedClass: string ="5c";
  students: StudentDto[] = [];


    constructor(
      private classesService: ClassesService,
      private studentsService: StudentsService,
      ) { }

  ngOnInit(): void {
    this.classesService.classesGet()
    .subscribe(x=> this.classes=x);

      this.studentsService.studentsGet(this.selectedClass)
      .subscribe(x=> this.students=x);
  }

  onSelectedClassChanged(selectedClass: string): void {
    console.log(selectedClass);
    this.selectedClass = selectedClass;

    console.log("Students reset");
    this.students = [];
    
    console.log("Student list filled with ");

    this.studentsService.studentsGet(this.selectedClass)
    .subscribe(x=> this.students=x);
    console.log(this.students);
  }


}
