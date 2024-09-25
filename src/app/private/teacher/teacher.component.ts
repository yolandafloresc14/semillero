import { Component } from '@angular/core';
import { HeaderComponent } from '../../core/components/header/header.component';
import { SideBarComponent } from '../../core/components/side-bar/side-bar.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-teacher',
  standalone: true,
  imports: [
    HeaderComponent,
    SideBarComponent,
    NzLayoutModule,
    RouterOutlet
  ],
  templateUrl: './teacher.component.html',
  styleUrl: './teacher.component.css'
})
export class TeacherComponent {
  isDespliegue:boolean = false
}
