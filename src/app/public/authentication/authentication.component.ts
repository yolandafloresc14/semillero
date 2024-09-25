import { Component, ViewEncapsulation, HostBinding } from '@angular/core';
import { HeaderComponent } from '../../core/components/header/header.component';
import { Router } from '@angular/router';
import { StudentLogin1 } from '../../core/components/StudentLogin1/StudentLogin1.component';
import { AuthService } from "../../core/servicios/roles/auth.service";

@Component({
  selector: 'app-authentication',
  standalone: true,
  imports: [StudentLogin1, HeaderComponent],
  templateUrl: './authentication.component.html',
  styleUrl: './authentication.component.css',
})

export class AuthenticationComponent {
  @HostBinding('style.display') display = 'contents';

  constructor(private router: Router, private authService: AuthService) {}

  onStudentButtonClick() {
<<<<<<< Updated upstream
    this.router.navigate(['/studentlogin']);
  }

  onDocenteButtonClick() {
    this.router.navigate(['/docentelogin']);
=======
    this.authService.setRole('student')
    this.router.navigate(["/studentLogin"]);
    console.log("click desde estudiante")
  }

  onDocenteButtonClick() {
    this.authService.setRole("teacher")
    this.router.navigate(["/teacherLogin"]);
    console.log("click desde docente")
>>>>>>> Stashed changes
  }

  
}
