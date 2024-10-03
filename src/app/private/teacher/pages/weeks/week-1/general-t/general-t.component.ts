import { Component } from '@angular/core';
import { NzBreadCrumbComponent, NzBreadCrumbItemComponent } from 'ng-zorro-antd/breadcrumb';
import { NzButtonComponent } from 'ng-zorro-antd/button';
import { NzCardComponent } from 'ng-zorro-antd/card';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { TemasComponent } from '../temas/temas.component';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { CommonModule } from '@angular/common';
import { ExamenTComponent } from "../../examen-t/examen-t.component";

@Component({
  selector: 'app-general-t',
  standalone: true,
  imports: [
    NzBreadCrumbComponent,
    NzBreadCrumbItemComponent,
    NzButtonComponent,
    NzCardComponent,
    NzCollapseModule,
    NzIconModule,
    TemasComponent,
    CommonModule,
    ExamenTComponent
],
  templateUrl: './general-t.component.html',
  styleUrl: './general-t.component.css'
})
export class GeneralTComponent {
  mostrarTemas = false; // Inicialmente oculto

  desplegarTemas() {
    this.mostrarTemas = !this.mostrarTemas; // Alterna el valor
  }
}
