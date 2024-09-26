import { Routes } from '@angular/router';
import { StudentComponent } from './private/student/student.component';
import { AuthenticationComponent } from './public/authentication/authentication.component';
import { StudentLoginComponent } from './private/student/student-login/student-login.component';
import { authGuard } from './core/guards/auth/auth.guard';
import { HomeComponent } from './private/student/pages/home/home.component';
import { DocenteLoginComponent } from './private/teacher/docente-login/docente-login.component';
import { TeacherComponent } from './private/teacher/teacher.component';
import { PersonalInfoStudentComponent } from './private/student/pages/personal-info-student/personal-info-student.component';
import { HomeTComponent } from './private/teacher/pages/home-t/home-t.component';
import { GeneralComponent } from './private/student/pages/weeks/week-1/general/general.component';
import { GeneralTComponent } from './private/teacher/pages/weeks/general-t/general-t.component';
import { ExamenStudentComponent } from './private/student/pages/examen-student/examen-student.component';

export const routes: Routes = [
    {path: 'student', component: StudentComponent,
        children: [
            {path: '', redirectTo: 'home', pathMatch: 'full'},
            {path: 'home', component: HomeComponent},
            {path: 'perfil', component: PersonalInfoStudentComponent},
            {path: 'general', component: GeneralComponent},
            {path: 'examen', component: ExamenStudentComponent}

        ]
    },
    {path: 'teacher', component: TeacherComponent,
        children: [
            {path: '', redirectTo: 'home', pathMatch: 'full'},
            {path: 'home', component: HomeTComponent},
            {path: 'general', component: GeneralTComponent}
        ]
    },
    {path: 'login', component: AuthenticationComponent},
    {path: 'studentlogin', component: StudentLoginComponent, canActivate: [authGuard]},
    {path: 'docentelogin', component: DocenteLoginComponent, canActivate: [authGuard]},
    {path: '', redirectTo: '/login', pathMatch: 'full'},
    //{path: '**', redirectTo: '/login'},
];
