import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestStudentComponent } from './test-student.component';

describe('TestStudentComponent', () => {
  let component: TestStudentComponent;
  let fixture: ComponentFixture<TestStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestStudentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TestStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
