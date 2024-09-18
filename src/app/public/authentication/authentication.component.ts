import { Component, ViewEncapsulation, HostBinding } from "@angular/core";
import { HeaderComponent } from '../../core/components/header/header.component';
import { Router } from "@angular/router";
import { StudentLogin1 } from '../../core/components/StudentLogin1/StudentLogin1.component';
@Component({
  selector: 'app-authentication',
  standalone: true,
  imports: [StudentLogin1,
    HeaderComponent
  ],
  templateUrl: './authentication.component.html',
  styleUrl: './authentication.component.css'
})
export class AuthenticationComponent {
  @HostBinding("style.display") display = "contents";

  constructor(private router: Router) {}

  onStudentButtonClick() {
    this.router.navigate(["/studentLogin"]);
  }

  onDocenteButtonClick() {
    this.router.navigate(["/docentelogin"]);
  }
}
