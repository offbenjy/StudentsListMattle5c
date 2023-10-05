import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { ClassesService, MoveStudentDto, StudentDto, StudentsService } from './swagger';
import { MoveInfo } from './log/MoveInfo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  classes: string[] = [];
  selectedClass: string = "4a";
  students: StudentDto[] = [];
  studentToMove: MoveStudentDto = null!;
  classesWithoutTheSelector: string[] = [];
  selectedMode: string = "table";
  lastMoveInfo: MoveInfo | null = null;
  studentsMoved: StudentDto[] = [];
  movedStudent: StudentDto = null!;

  constructor(
    private classesService: ClassesService,
    private studentsService: StudentsService,
  ) { }

  ngOnInit(): void {
    this.classesService.classesGet()
      .subscribe(x => {
        this.classes = x;
        this.classesWithoutTheSelector = [...this.classes];
        console.log(this.classes + " classes");
        this.onSelectedClassChanged(this.selectedClass);
      });


    this.studentsService.studentsGet(this.selectedClass)
      .subscribe(x => {
        this.students = x
        console.log(this.students);

      });


    this.students.forEach(student => {
      console.log(`Student ${student.firstname} - Gender: ${student.gender}`);
    });

  }

  onSelectedClassChanged(selectedClass: string): void {
    console.log(this.classes + " classes");

    console.log(selectedClass);
    this.selectedClass = selectedClass;


    this.updateClassesWithoutSelectedStudent();

    console.log("Students reset");
    this.students = [];

    //console.log("Student list filled with ");
    this.studentsService.studentsGet(this.selectedClass)
      .subscribe(x => {
        this.students = x
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
    let firstname = selectedClass.split('_')[3];
    let lastname = selectedClass.split('_')[4];
    console.log(id);

    console.log(clazz);
    this.studentToMove = { newClazzName: clazz, oldClazzName: oldClazz };
    this.studentsService.studentsIdPut(id, this.studentToMove)
      .subscribe(x => {
        console.log('Student moved successfully')

        this.onMoveStudent(id, clazz, oldClazz, firstname, lastname);

        this.onSelectedClassChanged(oldClazz);


      });
  }

  onMoveStudent(id: number, targetClazz: string, oldClazz: string, firstname: string, lastname: string,): void {
    this.studentsService.studentsGet(targetClazz)
      .subscribe(x => {
        this.studentsMoved = x
        console.log(this.students);

      });
    console.log(id + "id in move Student");

    const moveInfo: MoveInfo = {
      studentName: `${lastname} ${firstname}`,
      targetClazz: targetClazz,

    };
    //console.log(moveInfo)
    this.onStudentMoved(moveInfo);
  }

  onStudentMoved(moveInfo: MoveInfo): void {
    console.log(moveInfo + ":Move Info");
    this.lastMoveInfo = moveInfo;
  }
}
