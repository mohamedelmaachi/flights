import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AirPortDetailsComponent } from './air-port-details.component';

describe('AirPortDetailsComponent', () => {
  let component: AirPortDetailsComponent;
  let fixture: ComponentFixture<AirPortDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AirPortDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AirPortDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
