import { Component, OnInit } from '@angular/core';
import { RadioGroupFrontComponent } from '../../../../../core/components/radio-group-front/radio-group-front.component';
import { FormGroup, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { CommonModule } from '@angular/common';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NZ_ICONS,NzIconModule } from 'ng-zorro-antd/icon';
import { NzProgressModule } from 'ng-zorro-antd/progress';
import { ExamenService } from '../../../../../core/servicios/examen/examen/examen.service';
import { Enunciado } from '../../../../../core/interfaces/utilidades/enunciado.interface';
import { Respuesta } from '../../../../../core/interfaces/utilidades/respuesta.interface';
import { FileOutline, PercentageOutline, FieldTimeOutline, SendOutline } from '@ant-design/icons-angular/icons';

@Component({
  selector: 'app-examen-student',
  standalone: true,
  imports: [
    CommonModule,
    NzIconModule,
    ReactiveFormsModule,
    NzFormModule,
    NzButtonModule,
    NzGridModule,
    NzDividerModule,
    NzProgressModule,
    RadioGroupFrontComponent
  ],
  providers: [
    { provide: NZ_ICONS, useValue: [FileOutline, PercentageOutline, FieldTimeOutline, SendOutline] }
  ],
  templateUrl: './examen-student.component.html',
  styleUrls: ['./examen-student.component.css']
})
export class ExamenStudentComponent implements OnInit {
  courseTitle: string = 'Ciencias Sociales';
  passingPercentage: number = 60;
  duration: string = '1h 15min';

  confirmando: boolean = false;
  porcentaje: number = 0;
  enunciados: Enunciado[] = [];
  modalForm: FormGroup;

  constructor(
    private msgService: NzMessageService,
    private fb: NonNullableFormBuilder,
    private examenService: ExamenService
  ) {
    // Inicialización del formulario vacío
    this.modalForm = this.fb.group({});
  }

  ngOnInit() {
    this.cargarExamen();
  }

  // Cargar los enunciados y respuestas del examen
  cargarExamen() {
    const idExamen = 2;  // Cambiar según sea necesario
    this.examenService.obtenerExamenPorId(idExamen).subscribe(
      enunciados => {
        this.enunciados = enunciados;

        // Agregar controles dinámicos para cada enunciado en el formulario
        this.enunciados.forEach(enunciado => {
          this.modalForm.addControl(
            `e_${enunciado.id}`,
            this.fb.control(null, [Validators.required])
          );
        });
      },
      error => {
        console.error('Error al cargar el examen:', error);
      }
    );
  }

  // Obtener respuestas asociadas a un enunciado
  obtenerRespuestasPorEnunciado(idEnunciado: number): Respuesta[] {
    const enunciado = this.enunciados.find(e => e.id === idEnunciado);
    console.log('Respuestas para el enunciado:', enunciado); // Verifica aquí
    return enunciado ? enunciado.respuestas : [];
  }

  // Calcular el porcentaje de avance
  setPorcentaje() {
    const valores = Object.values(this.modalForm.value);
    if (valores.length > 0) {
      const porcentaje = (valores.filter(valor => valor !== null).length / valores.length) * 100;
      this.porcentaje = Math.round(porcentaje * 100) / 100;
    } else {
      this.porcentaje = 0;
    }
  }

  // Track por enunciado en el *ngFor
  trackEnunciado(index: number, enunciado: Enunciado): number {
    return enunciado.id;
  }

  // Enviar el formulario
  enviarForm() {
    this.confirmando = true;

    // Verificamos si el formulario es válido
    if (this.modalForm.valid) {
      console.log(this.modalForm.value);  // Manejar el envío del examen
      this.msgService.success('Examen enviado correctamente.');
    } else {
      console.log(this.modalForm.value);
      this.confirmando = false;
      this.msgService.error('Datos incompletos, complétalos para enviar el examen.');

      // Marcar los controles inválidos como sucios y tocados para mostrar errores
      Object.values(this.modalForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.markAsTouched();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }
}
