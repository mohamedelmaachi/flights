import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaostComponent } from './taost.component';

describe('TaostComponent', () => {
  let component: TaostComponent;
  let fixture: ComponentFixture<TaostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
