import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzMenuModule } from 'ng-zorro-antd/menu';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [
    RouterModule,
    NzLayoutModule,
    NzBreadCrumbModule,
    NzIconModule,
    NzMenuModule
  ],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css'
})

export class SideBarComponent {
  @Input() despliegue?:boolean
}
