import { Routes } from '@angular/router';
import { StudentComponent } from './private/student/student.component';
import { AuthenticationComponent } from './public/authentication/authentication.component';

export const routes: Routes = [
    {path: 'student', component: StudentComponent},
    {path: 'login', component: AuthenticationComponent}
];
