import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocenteLoginComponent } from './docente-login.component';

describe('DocenteLoginComponent', () => {
  let component: DocenteLoginComponent;
  let fixture: ComponentFixture<DocenteLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocenteLoginComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DocenteLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
