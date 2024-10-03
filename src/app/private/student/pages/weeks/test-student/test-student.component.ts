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
  selector: 'app-test-student',
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
  templateUrl: './test-student.component.html',
  styleUrls: ['./test-student.component.css']
})

export class TestStudentComponent implements OnInit {
  courseTitle: string = 'Ciencias Sociales';
  passingPercentage: number = 60;
  duration: string = '1h 15min';

  confirmando: boolean = false;
  porcentaje: number = 0;
  enunciados: Enunciado[] = [];
  modalForm: FormGroup;
  preguntaActual: number = 0; // Indice de la pregunta actual
  respuestasContestadas: Set<number> = new Set(); // Set para almacenar preguntas respondidas

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

  cargarExamen() {
    const idExamen = 2;  // Cambiar según sea necesario
    this.examenService.obtenerExamenPorId(idExamen).subscribe(
      enunciados => {
        this.enunciados = enunciados;
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

  obtenerRespuestasPorEnunciado(idEnunciado: number): Respuesta[] {
    const enunciado = this.enunciados.find(e => e.id === idEnunciado);
    return enunciado ? enunciado.respuestas : [];
  }

  // Calcular el porcentaje de avance basado en las preguntas respondidas
  setPorcentaje() {
    // Agregamos la pregunta actual al conjunto de preguntas contestadas
    const control = this.modalForm.get(`e_${this.enunciados[this.preguntaActual].id}`);
    if (control?.value !== null && !this.respuestasContestadas.has(this.preguntaActual)) {
      this.respuestasContestadas.add(this.preguntaActual);  // Marcamos la pregunta como contestada
    }

    // Log para depuración: ver cuántas preguntas están contestadas y el total
    console.log("Preguntas contestadas: ", this.respuestasContestadas.size);
    console.log("Total preguntas: ", this.enunciados.length);

    // Actualizamos el porcentaje con base en cuántas preguntas han sido contestadas
    const totalPreguntas = this.enunciados.length;
    const preguntasContestadas = this.respuestasContestadas.size;
    this.porcentaje = Math.round((preguntasContestadas / totalPreguntas) * 100);

    // Log para depuración: ver el valor del porcentaje calculado
    console.log("Porcentaje actualizado: ", this.porcentaje);
  }

  // Avanzar a la siguiente pregunta
  siguientePregunta() {
    if (this.preguntaActual < this.enunciados.length - 1) {
      this.setPorcentaje();  // Actualizar el porcentaje cuando se pasa a la siguiente pregunta
      this.preguntaActual++;
    } else {
      this.setPorcentaje();  // Asegurarse de actualizar antes de enviar
      this.enviarForm();
    }
  }

  // Retroceder a la pregunta anterior
  anteriorPregunta() {
    if (this.preguntaActual > 0) {
      this.preguntaActual--;
    }
  }

  enviarForm() {
    this.confirmando = true;

    if (this.modalForm.valid) {
      console.log(this.modalForm.value);
      this.msgService.success('Test enviado correctamente.');
    } else {
      this.confirmando = false;
      this.msgService.error('Completa todas las preguntas antes de enviar.');
      Object.values(this.modalForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.markAsTouched();
        }
      });
    }
  }
}

