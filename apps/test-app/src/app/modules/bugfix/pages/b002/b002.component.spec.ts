import { ComponentFixture, TestBed } from '@angular/core/testing';

import { B002Component } from './b002.component';

describe('B002Component', () => {
  let component: B002Component;
  let fixture: ComponentFixture<B002Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ B002Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(B002Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
