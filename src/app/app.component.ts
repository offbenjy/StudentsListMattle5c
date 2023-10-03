import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { ClassesService, MoveStudentDto, StudentDto, StudentsService } from './swagger';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit { 
  classes: string[] = [];
  selectedClass: string ="4a";
  students: StudentDto[] = [];
  studentToMove: MoveStudentDto = null!;
  classesWithoutTheSelector: string[] = [];
  selectedMode:string = "table";

    constructor(
      private classesService: ClassesService,
      private studentsService: StudentsService,
      ) { }

  ngOnInit(): void {
    this.classesService.classesGet()
    .subscribe(x => {
      this.classes = x;
      this.classesWithoutTheSelector = [...this.classes]; 
      console.log(this.classes+ " classes");
      this.onSelectedClassChanged(this.selectedClass);
    });
   

      this.studentsService.studentsGet(this.selectedClass)      
      .subscribe(x=> {this.students=x
        console.log(this.students);

      });


      this.students.forEach(student => {
        console.log(`Student ${student.firstname} - Gender: ${student.gender}`);
      });
  }

  onSelectedClassChanged(selectedClass: string): void {
    console.log(this.classes+ " classes");

    console.log(selectedClass);
    this.selectedClass = selectedClass;

   
    this.updateClassesWithoutSelectedStudent();
    
    console.log("Students reset");
    this.students = [];
    
    console.log("Student list filled with ");
    this.studentsService.studentsGet(this.selectedClass)
    .subscribe(x=> {this.students=x
    });
    
  

  }
  

  private updateClassesWithoutSelectedStudent(): void {
    this.classesWithoutTheSelector = this.classes.filter(
      (cls) => cls !== this.selectedClass
      
    );
    console.log(this.classesWithoutTheSelector);
  }

  onMoveStudentTo(selectedClass: string): void {
    let clazz = selectedClass.split('_')[0]
    let id = +selectedClass.split('_')[1];
    let oldClazz = selectedClass.split('_')[2];
    console.log(id);  
      
      console.log(clazz);
      this.studentToMove = {newClazzName:clazz,oldClazzName:oldClazz}; //new MoveStudentDto{clazz, '5c'};
    this.studentsService.studentsIdPut(id,  this.studentToMove)
    .subscribe(x=>{console.log('Student moved successfully')
    this.onSelectedClassChanged(oldClazz);
  });
  }



}
