import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AirLineDetailsComponent } from './air-line-details.component';

describe('AirLineDetailsComponent', () => {
  let component: AirLineDetailsComponent;
  let fixture: ComponentFixture<AirLineDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AirLineDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AirLineDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
