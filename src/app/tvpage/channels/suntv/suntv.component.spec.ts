import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuntvComponent } from './suntv.component';

describe('SuntvComponent', () => {
  let component: SuntvComponent;
  let fixture: ComponentFixture<SuntvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuntvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuntvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
