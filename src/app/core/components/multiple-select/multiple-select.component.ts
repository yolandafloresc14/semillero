import { Component, Input, inject } from '@angular/core';
import { ControlContainer, FormControl, ReactiveFormsModule } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { EnunciadoService } from '../../servicios/examen/enunciado/enunciado.service';
import { RespuestaService } from '../../servicios/examen/respuesta/respuesta.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-multiple-select',
  standalone: true,
  imports: [NzSelectModule, NzFormModule, NzIconModule, ReactiveFormsModule, CommonModule],
  templateUrl: './multiple-select.component.html',
  styleUrls: ['./multiple-select.component.css'],
  viewProviders: [{
    provide: ControlContainer,
    useFactory: () => inject(ControlContainer, { skipSelf: true, host: true })
  }]
})
export class MultipleSelectComponent {
  @Input() controlName?: string;
  @Input() label?: string;
  @Input() atributte: string[] = ['id', 'descripcion'];
  @Input() options?: any[];
  @Input() tipoServicio?: 'ENUNCIADO' | 'RESPUESTA'; 
  @Input() examenId?: number; 
  @Input() enunciadoId?: number; 
  @Input() enunciadoService?: EnunciadoService; 
  @Input() respuestaService?: RespuestaService; 

  optionsData: any[] = [];
  cargando: boolean = false;

  get prefijo() {
    return this.tipoServicio === 'ENUNCIADO' ? 'pregunta' : 'respuesta';
  }

  ngOnInit() {
    this.cargarDatos();
  }

  cargarDatos() {
    if (this.tipoServicio === 'ENUNCIADO' && this.examenId) {
      this.cargarEnunciadosPorExamen();
    } else if (this.tipoServicio === 'RESPUESTA' && this.enunciadoId) {
      this.cargarRespuestasPorEnunciado();
    }
  }

  cargarEnunciadosPorExamen() {
    this.cargando = true;
    this.enunciadoService?.obtenerEnunciadosPorExamen(this.examenId!).subscribe({
      next: (options) => {
        this.optionsData = options;
        this.cargando = false;
      },
      error: () => {
        this.cargando = false;
      }
    });
  }

  cargarRespuestasPorEnunciado() {
    this.cargando = true;
    this.respuestaService?.obtenerRespuestasPorEnunciado(this.enunciadoId!).subscribe({
      next: (options) => {
        this.optionsData = options;
        this.cargando = false;
      },
      error: () => {
        this.cargando = false;
      }
    });
  }

  // Método para manejar cambios de selección
  cambio(event: any) {
    // Aquí puedes manejar la lógica cuando el valor cambia
    console.log('Valor cambiado:', event);
  }
}
