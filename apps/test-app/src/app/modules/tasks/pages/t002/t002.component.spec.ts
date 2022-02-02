import { ComponentFixture, TestBed } from '@angular/core/testing';

import { T002Component } from './t002.component';

describe('T002Component', () => {
  let component: T002Component;
  let fixture: ComponentFixture<T002Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ T002Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(T002Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
