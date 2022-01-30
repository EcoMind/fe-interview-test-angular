import { ComponentFixture, TestBed } from '@angular/core/testing';

import { B001Component } from './b001.component';

describe('B001Component', () => {
  let component: B001Component;
  let fixture: ComponentFixture<B001Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ B001Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(B001Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
