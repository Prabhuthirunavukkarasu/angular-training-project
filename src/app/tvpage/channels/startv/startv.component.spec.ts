import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartvComponent } from './startv.component';

describe('StartvComponent', () => {
  let component: StartvComponent;
  let fixture: ComponentFixture<StartvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
