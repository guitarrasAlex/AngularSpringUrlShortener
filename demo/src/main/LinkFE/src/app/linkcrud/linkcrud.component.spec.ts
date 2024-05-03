import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkcrudComponent } from './linkcrud.component';

describe('LinkcrudComponent', () => {
  let component: LinkcrudComponent;
  let fixture: ComponentFixture<LinkcrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LinkcrudComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LinkcrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
