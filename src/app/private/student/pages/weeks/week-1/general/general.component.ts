import { Component } from '@angular/core';
import { NzBreadCrumbComponent, NzBreadCrumbItemComponent } from 'ng-zorro-antd/breadcrumb';
import { NzButtonComponent } from 'ng-zorro-antd/button';
import { NzCardComponent } from 'ng-zorro-antd/card';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';

@Component({
  selector: 'app-general',
  standalone: true,
  imports: [
    NzBreadCrumbItemComponent,
    NzCardComponent,
    NzBreadCrumbComponent,
    NzButtonComponent,
    NzCollapseModule
  ],
  templateUrl: './general.component.html',
  styleUrl: './general.component.css'
})
export class GeneralComponent {

}
