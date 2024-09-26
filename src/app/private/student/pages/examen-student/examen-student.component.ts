import { Component, OnInit } from '@angular/core';
import { RadioGroupFrontComponent } from '../../../../core/components/radio-group-front/radio-group-front.component';
import { FormGroup, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { CommonModule } from '@angular/common';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzProgressModule } from 'ng-zorro-antd/progress';
import { EnunciadoService } from '../../../../core/servicios/examen/enunciado/enunciado.service';
import { RespuestaService } from '../../../../core/servicios/examen/respuesta/respuesta.service';
import { Enunciado } from '../../../../core/interfaces/utilidades/enunciado.interface';
import { Respuesta } from '../../../../core/interfaces/utilidades/respuesta.interface';

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
  templateUrl: './examen-student.component.html',
  styleUrl: './examen-student.component.css'
})

export class ExamenStudentComponent implements OnInit {
  courseTitle: string = 'Ciencias Sociales';
  passingPercentage: number = 60;
  duration: string = '1h 15min';

  confirmando: boolean = false;
  porcentaje: number = 0;
  enunciados: Enunciado[] = [];
  respuestasPorEnunciado: { [key: number]: Respuesta[] } = {};
  modalForm: FormGroup;

  private enunciadosPrueba: Enunciado[] = [
    { id: 1, idExamen: 1, descripcion: '¿Cuál es la capital de Francia?', numero: 1 },
    { id: 2, idExamen: 1, descripcion: '¿Qué continente es Australia?', numero: 2 },
    { id: 3, idExamen: 1, descripcion: '¿Quién escribió "Cien años de soledad"?', numero: 3 },
  ];

  private respuestasPrueba: Respuesta[] = [
    { id: 1, idEnunciado: 1, descripcion: 'París', esCorrecto: true },
    { id: 2, idEnunciado: 1, descripcion: 'Londres', esCorrecto: false },
    { id: 3, idEnunciado: 2, descripcion: 'Asia', esCorrecto: false },
    { id: 4, idEnunciado: 2, descripcion: 'Oceanía', esCorrecto: true },
    { id: 5, idEnunciado: 3, descripcion: 'Gabriel García Márquez', esCorrecto: true },
    { id: 6, idEnunciado: 3, descripcion: 'Julio Cortázar', esCorrecto: false },
  ];

  

  constructor(
    private msgService: NzMessageService,
    private fb: NonNullableFormBuilder,
    private enunciadoService: EnunciadoService,
    private respuestaService: RespuestaService
  ) {
    this.modalForm = this.fb.group({
      p_1: [1, [Validators.required]], // Ejemplo de valor de prueba
      p_2: [2, [Validators.required]],
      p_3: [1, [Validators.required]],
      p_4: [3, [Validators.required]],
      p_5: [2, [Validators.required]],
      p_6: [1, [Validators.required]],
      p_7: [3, [Validators.required]],
      p_8: [2, [Validators.required]],
      p_9: [1, [Validators.required]],
      p_10: [3, [Validators.required]],
    });
  }

  

  ngOnInit() {
    this.cargarDatosPrueba();
  }


  cargarDatosPrueba() {
    this.enunciados = this.enunciadosPrueba;
  
    this.enunciados.forEach(enunciado => {
      // Filtrar respuestas por enunciado
      this.respuestasPorEnunciado[enunciado.id] = this.respuestasPrueba.filter(r => r.idEnunciado === enunciado.id);
      console.log(`Respuestas para enunciado ${enunciado.id}:`, this.respuestasPorEnunciado[enunciado.id]); // Añadir consola
      this.modalForm.addControl('e_' + enunciado.id, this.fb.control(null, [Validators.required]));
    });
  }
  
  obtenerRespuestasPorEnunciado(idEnunciado: number): Respuesta[] {
    const respuestas = this.respuestasPorEnunciado[idEnunciado] || [];
    console.log(`Respuestas obtenidas para enunciado ${idEnunciado}:`, respuestas); // Añadir consola
    return respuestas;
  }
  
  cargarEnunciados() {
    const idExamen = 1; // Reemplaza con el ID del examen que necesites
    this.enunciadoService.obtenerEnunciadosPorExamen(idExamen).subscribe(enunciados => {
      this.enunciados = enunciados;
      this.enunciados.forEach(enunciado => {
        this.cargarRespuestas(enunciado.id);
      });
    });
  }

  cargarRespuestas(idEnunciado: number) {
    this.respuestaService.obtenerRespuestasPorEnunciado(idEnunciado).subscribe(respuestas => {
      this.respuestasPorEnunciado[idEnunciado] = respuestas;
      this.modalForm.addControl('e_' + idEnunciado, this.fb.control(null, [Validators.required]));
    });
  }

  setPorcentaje() {
    const valores = Object.values(this.modalForm.value);
    const porcentaje = valores.filter((valor) => valor !== null).length / valores.length * 100;
    this.porcentaje = Math.round(porcentaje * 100) / 100;
  }

  trackEnunciado(index: number, enunciado: Enunciado): number {
    return enunciado.id; // Devuelve un identificador único para cada enunciado
  }
  

  enviarForm() {
    this.confirmando = true;
    if (this.modalForm.valid) {
      // Aquí puedes manejar el envío del formulario
      console.log(this.modalForm.value);
      this.msgService.success('Examen enviado correctamente.');
    } else {
      console.log(this.modalForm.value);
      this.confirmando = false;
      this.msgService.error('Datos incompletos, complétalos para enviar el examen.');
      Object.values(this.modalForm.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty();
          control.markAsTouched();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }
}
