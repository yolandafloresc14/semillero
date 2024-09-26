import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalificationsTComponent } from './califications-t.component';

describe('CalificationsTComponent', () => {
  let component: CalificationsTComponent;
  let fixture: ComponentFixture<CalificationsTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalificationsTComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CalificationsTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
