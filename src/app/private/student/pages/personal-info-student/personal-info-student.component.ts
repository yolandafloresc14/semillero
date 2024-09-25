import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../../core/servicios/usuario/usuario.service';
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
  styleUrls: ['./personal-info-student.component.css']
})
export class PersonalInfoStudentComponent implements OnInit {
  user: any; // Cambia a 'any' para almacenar la información del usuario

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    // Obtiene la información del usuario desde el UserService
    const userInfo = this.userService.getUserInfo();
    
    // Asigna los valores del token a la propiedad user
    this.user = {
      name: `${userInfo.nombres} ${userInfo.apellidos}`,
      role: 'Alumno', // Puedes ajustarlo según sea necesario
      firstName: userInfo.nombres,
      lastName: userInfo.apellidos,
      dni: userInfo.dni,
      username: userInfo.usuario,
      grade: userInfo.grado.NUMERO,
      nivel: userInfo.grado.NIVEL // Ajustar según la estructura de grado
    };
  }
}
