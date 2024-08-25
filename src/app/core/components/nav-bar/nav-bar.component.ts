import { Component } from '@angular/core';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [
    NzIconModule,
    NzMenuModule,
    NzToolTipModule
  ],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  isCollapsed: boolean = false;

  // Puedes agregar métodos para cambiar el estado de `isCollapsed`
  toggleCollapsed() {
    this.isCollapsed = !this.isCollapsed;
  }
}
