import { Component } from '@angular/core';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';

@Component({
  selector: 'app-home-t',
  standalone: true,
  imports: [
    NzCardModule,
    NzGridModule,
    NzIconModule
  ],
  templateUrl: './home-t.component.html',
  styleUrl: './home-t.component.css'
})
export class HomeTComponent {

}
