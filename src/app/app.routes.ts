import { Routes } from '@angular/router';
import { StudentComponent } from './private/student/student.component';
import { AuthenticationComponent } from './public/authentication/authentication.component';
import { HomeComponent } from './private/student/pages/home/home.component';

export const routes: Routes = [
    {path: 'student', component: StudentComponent,
        children: [
            {path: 'home', component: HomeComponent}
        ]
    },
    {path: 'login', component: AuthenticationComponent}
];
