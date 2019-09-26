import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PolimerComponent } from './polimer.component';

describe('PolimerComponent', () => {
  let component: PolimerComponent;
  let fixture: ComponentFixture<PolimerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolimerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
