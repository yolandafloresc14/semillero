import { Routes } from '@angular/router';
import { StudentComponent } from './private/student/student.component';
import { AuthenticationComponent } from './public/authentication/authentication.component';
import { StudentLoginComponent } from './private/student/student-login/student-login.component';
import { authGuard } from './core/guards/auth/auth.guard';
import { HomeComponent } from './private/student/pages/home/home.component';

export const routes: Routes = [
  {
    path: 'student',
    component: StudentComponent,
    canActivate: [authGuard],
    children: [{ path: 'home', component: HomeComponent }],
  },
  { path: 'login', component: AuthenticationComponent },
  { path: 'studentlogin', component: StudentLoginComponent },
];
