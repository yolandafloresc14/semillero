import { Component } from '@angular/core';
import { FormControl, FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';  // Importar el Router
import { ReactiveFormsModule } from '@angular/forms'; 
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { AuthService } from '../../../core/servicios/autenticacion/autenticacion.service';

@Component({
  selector: 'app-docente-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,  
    NzFormModule,
    NzInputModule,
    NzButtonModule,
    NzCheckboxModule
  ],
  templateUrl: './docente-login.component.html',
  styleUrl: './docente-login.component.css'
})

export class DocenteLoginComponent {
  validateForm: FormGroup = this.fb.group({
    userName: ['', [Validators.required]],
    password: ['', [Validators.required]],
    remember: [true]
  });

  constructor(
    private fb: NonNullableFormBuilder, 
    private router: Router,
    private authService: AuthService 
  ) {}  // Inyectar el Router

  submitForm(): void {
    if (this.validateForm.valid) {
      const { userName, password } = this.validateForm.value;

      this.authService.loginDocente(userName, password, 'teacher').subscribe(
        //El nuevo parametro es para especificar el rol del usuario y asi crear una cookie con el nombre del rol
        (response) => {
          console.log('Login exitoso', response);
          // Redirigir al estudiante a la página correspondiente
          this.router.navigate(['/teacher']);
        },
        (error) => {
          console.error('Error en la autenticación', error);
        }
      );
    
    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }  
}
