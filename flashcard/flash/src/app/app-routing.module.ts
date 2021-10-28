import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent} from './home/home.component';
import { GradeComponent} from './grade/grade.component';
import { SubjectComponent} from './subject/subject.component';
import { RegisterComponent} from './register/register.component';
import { LoginComponent}    from './login/login.component';

const routes: Routes = [
{path: '' ,component:HomeComponent},
{path: 'grade',component:GradeComponent},
{path: 'subject',component:SubjectComponent},
{path: 'register',component:RegisterComponent},
{path: 'login',component:LoginComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
