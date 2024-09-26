import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralTComponent } from './general-t.component';

describe('GeneralTComponent', () => {
  let component: GeneralTComponent;
  let fixture: ComponentFixture<GeneralTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GeneralTComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GeneralTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
