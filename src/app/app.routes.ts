import { Routes } from '@angular/router';
import { StudentComponent } from './private/student/student.component';
import { AuthenticationComponent } from './public/authentication/authentication.component';
import { StudentLoginComponent } from './private/student/student-login/student-login.component';
import { authGuard } from './core/guards/auth/auth.guard';
import { HomeComponent } from './private/student/pages/home/home.component';
import { DocenteLoginComponent } from './private/teacher/docente-login/docente-login.component';
import { TeacherComponent } from './private/teacher/teacher.component';

export const routes: Routes = [
  {
    path: 'student',
    component: StudentComponent,
    children: [{ path: 'home', component: HomeComponent }],
  },
  { path: 'teacher', component: TeacherComponent },
  { path: 'login', component: AuthenticationComponent },
  {
    path: 'studentlogin',
    component: StudentLoginComponent,
    canActivate: [authGuard],
  },
  {
    path: 'docentelogin',
    component: DocenteLoginComponent,
    canActivate: [authGuard],
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' },
];
