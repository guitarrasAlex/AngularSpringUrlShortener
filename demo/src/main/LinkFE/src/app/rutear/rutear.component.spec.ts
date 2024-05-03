import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutearComponent } from './rutear.component';

describe('RutearComponent', () => {
  let component: RutearComponent;
  let fixture: ComponentFixture<RutearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RutearComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RutearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
