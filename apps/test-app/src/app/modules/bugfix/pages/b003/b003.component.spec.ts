import { ComponentFixture, TestBed } from '@angular/core/testing';

import { B003Component } from './b003.component';

describe('B003Component', () => {
  let component: B003Component;
  let fixture: ComponentFixture<B003Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ B003Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(B003Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
