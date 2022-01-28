import { ComponentFixture, TestBed } from '@angular/core/testing';

import { T001Component } from './t001.component';

describe('T001Component', () => {
  let component: T001Component;
  let fixture: ComponentFixture<T001Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ T001Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(T001Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
