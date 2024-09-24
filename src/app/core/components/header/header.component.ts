import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { Router } from '@angular/router';
import { AuthService } from '../../servicios/autenticacion/autenticacion.service';

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
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  @Input() despliegue?: boolean;
  @Output() despliegueChange = new EventEmitter<boolean>();

  constructor(private authService: AuthService, private router: Router) {}

  cambiar() {
    this.despliegue = !this.despliegue;
    this.despliegueChange.emit(this.despliegue);
    console.log('Esto funciona');
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
