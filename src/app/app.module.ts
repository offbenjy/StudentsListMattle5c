import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { envrionment } from '../evironments/environment';
import { NavbarComponent } from './navbar/navbar.component';
import { StudentRowComponent } from './student-row/student-row.component';
import { BASE_PATH } from './swagger';
import { AppStudentRowCardComponent } from './app-student-row-card/app-student-row-card.component';
import { LogComponent } from './log/log.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    StudentRowComponent,
    AppStudentRowCardComponent,
    LogComponent
  ],
  imports: [
    BrowserModule, FormsModule,
    HttpClientModule
  ],
  providers: [
    { provide: BASE_PATH, useValue: envrionment.apiUrl },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
