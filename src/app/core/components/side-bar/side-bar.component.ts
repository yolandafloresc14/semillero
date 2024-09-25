import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzMenuModule } from 'ng-zorro-antd/menu';

import { AuthService } from '../../servicios/roles/auth.service';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [
    RouterModule,
    NzLayoutModule,
    NzBreadCrumbModule,
    NzIconModule,
    NzMenuModule
  ],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css'
})

export class SideBarComponent {
  @Input() despliegue?:boolean

  currentRole: string;

  constructor(private authService: AuthService) {
    // Obtener el rol del usuario
    if (this.authService.isTeacher()) {
      this.currentRole = 'teacher';
    } else {
      this.currentRole = 'student';
    }
    console.log('Current Role:', this.currentRole);
  }
}
