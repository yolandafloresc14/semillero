import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { UserService } from '../../servicios/usuario/usuario.service';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../servicios/autenticacion/autenticacion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    NzLayoutModule,
    NzAvatarModule,
    NzIconModule,
    NzBreadCrumbModule,
    NzMenuModule,
    NzDropDownModule,
    RouterLink
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'] // Cambié "styleUrl" por "styleUrls"
})

export class HeaderComponent implements OnInit {
  @Input() despliegue?: boolean;
  @Output() despliegueChange = new EventEmitter<boolean>();

  userName: string | null = ''; // Propiedad para almacenar el nombre de usuario

  constructor(
    private userService: UserService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadUserName(); // Cargar el nombre del usuario al inicializar el componente
  }

  cambiar() {
    this.despliegue = !this.despliegue;
    this.despliegueChange.emit(this.despliegue);
    console.log("Esto funciona");
  }

  // Método para cargar el nombre del usuario desde el UserService
  loadUserName(): void {
    const userInfo = this.userService.getUserInfo();
    if (userInfo) {
      this.userName = `${userInfo.nombres} ${userInfo.apellidos}`;
    }
  }

  logout(): void {
    // Llama al método logout del servicio de autenticación
    this.authService.logout();
    
    // Redirige a la página de inicio de sesión o la que consideres adecuada
    this.router.navigate(['/login']);
  }
}
