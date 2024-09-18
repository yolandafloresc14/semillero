import { Component } from '@angular/core';
import { HeaderComponent } from '../../../../core/components/header/header.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzGridModule } from 'ng-zorro-antd/grid';
@Component({
  selector: 'app-personal-info-student',
  standalone: true,
  imports: [HeaderComponent, NzLayoutModule, NzBreadCrumbModule, NzCardModule, NzGridModule],
  templateUrl: './personal-info-student.component.html',
  styleUrl: './personal-info-student.component.css'
})
export class PersonalInfoStudentComponent {
  user = {
    name: 'Castillo Goicochea Angie Carolina',
    role: 'Alumno',
    firstName: 'Angie Carolina',
    lastName: 'Castillo Goicochea',
    email: 'example@gmail.com',
    username: 'accg03',
    grade: '5to',
    phone: '985693254'
  };
}
