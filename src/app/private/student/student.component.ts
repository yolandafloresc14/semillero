import { Component } from '@angular/core';
import { HeaderComponent } from '../../core/components/header/header.component';
import { NavBarComponent } from '../../core/components/nav-bar/nav-bar.component';

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [
    HeaderComponent,
    NavBarComponent
  ],
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentComponent {

}
