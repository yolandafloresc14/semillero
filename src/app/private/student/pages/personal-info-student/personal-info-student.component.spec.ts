import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalInfoStudentComponent } from './personal-info-student.component';

describe('PersonalInfoStudentComponent', () => {
  let component: PersonalInfoStudentComponent;
  let fixture: ComponentFixture<PersonalInfoStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonalInfoStudentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PersonalInfoStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
