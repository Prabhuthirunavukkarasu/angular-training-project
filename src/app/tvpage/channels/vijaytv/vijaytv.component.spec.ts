import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VijaytvComponent } from './vijaytv.component';

describe('VijaytvComponent', () => {
  let component: VijaytvComponent;
  let fixture: ComponentFixture<VijaytvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VijaytvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VijaytvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
