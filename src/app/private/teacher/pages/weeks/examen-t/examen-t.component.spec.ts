import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamenTComponent } from './examen-t.component';

describe('ExamenTComponent', () => {
  let component: ExamenTComponent;
  let fixture: ComponentFixture<ExamenTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExamenTComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExamenTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
