import { Component } from '@angular/core';
import { FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { AuthService } from '../../../core/servicios/autenticacion/autenticacion.service';

@Component({
  selector: 'app-student-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NzFormModule,
    NzInputModule,
    NzButtonModule,
    NzCheckboxModule,
  ],
  templateUrl: './student-login.component.html',
  styleUrls: ['./student-login.component.css'],
})
export class StudentLoginComponent {
  validateForm: FormGroup = this.fb.group({
    userName: ['', [Validators.required]],
    password: ['', [Validators.required]],
    remember: [true],
  });

  constructor(
    private fb: NonNullableFormBuilder,
    private router: Router,
    private authService: AuthService // Inyectar el servicio de autenticación
  ) {}

  submitForm(): void {
    if (this.validateForm.valid) {
      const { userName, password } = this.validateForm.value;

      // Llamar al servicio para autenticar al usuario
      this.authService.loginAlumno(userName, password, 'student').subscribe(
        //El nuevo parametro es para especificar el rol del usuario y asi crear una cookie con el nombre del rol
        (response) => {
          console.log('Login exitoso', response);
          // Redirigir al estudiante a la página correspondiente
          this.router.navigate(['/student']);
        },
        (error) => {
          console.error('Error en la autenticación', error);
        }
      );
    } else {
      // Marcar todos los controles como sucios para que muestren errores si no son válidos
      Object.values(this.validateForm.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }
}
