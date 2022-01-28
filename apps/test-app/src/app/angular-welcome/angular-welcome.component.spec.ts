import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularWelcomeComponent } from './angular-welcome.component';

describe('AngularWelcomeComponent', () => {
  let component: AngularWelcomeComponent;
  let fixture: ComponentFixture<AngularWelcomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularWelcomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularWelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
