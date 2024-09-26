import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamenStudentComponent } from './examen-student.component';

describe('ExamenStudentComponent', () => {
  let component: ExamenStudentComponent;
  let fixture: ComponentFixture<ExamenStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExamenStudentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExamenStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
