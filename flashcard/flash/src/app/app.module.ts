import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GradeComponent } from './grade/grade.component';
import { SubjectComponent } from './subject/subject.component';
import { ShowGradeComponent } from './grade/show-grade/show-grade.component';
import { AddEditGradeComponent } from './grade/add-edit-grade/add-edit-grade.component';
import { ShowSubjectComponent } from './subject/show-subject/show-subject.component';
import { AddEditSubjectComponent } from './subject/add-edit-subject/add-edit-subject.component';
// import { SharedService } from './shared.service';
import { AuthusService } from './services/authus.service';

import {HttpClientModule} from '@angular/common/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    GradeComponent,
    SubjectComponent,
    ShowGradeComponent,
    AddEditGradeComponent,
    ShowSubjectComponent,
    AddEditSubjectComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [AuthusService],
  bootstrap: [AppComponent]
})
export class AppModule { }
