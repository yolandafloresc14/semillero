import { Component } from '@angular/core';
import { HeaderComponent } from '../../core/components/header/header.component';
import { SideBarComponent } from '../../core/components/side-bar/side-bar.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [
    HeaderComponent,
    SideBarComponent,
    NzLayoutModule
  ],
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentComponent {

}
