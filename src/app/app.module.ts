import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BASE_PATH } from './swagger';
import { envrionment } from '../evironments/environment';
import { NavbarComponent } from './navbar/navbar.component';
import { StudentRowComponent } from './student-row/student-row.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    StudentRowComponent
  ],
  imports: [
    BrowserModule, FormsModule,
    HttpClientModule
  ],
  providers: [
    {provide: BASE_PATH, useValue: envrionment.apiUrl},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
