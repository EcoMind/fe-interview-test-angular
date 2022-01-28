import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validator, Validators} from "@angular/forms";

@Component({
  selector: 'fe-interview-test-angular-b001',
  templateUrl: './b001.component.html',
  styles: [
    `
      :host {
        display: block;
      }
    `
  ],
  encapsulation: ViewEncapsulation.Emulated
})
export class B001Component implements OnInit {

  formGroup: FormGroup;
  nameFormControl: FormControl;
  surNameFormControl: FormControl;

  constructor(private fb: FormBuilder) {
    this.nameFormControl = new FormControl('', Validators.required);
    this.surNameFormControl = new FormControl('', Validators.required);
    this.formGroup = this.fb.group({
        nameFormControl: this.nameFormControl,
        surNameFormControl: this.surNameFormControl
      }
    );
  }

  ngOnInit(): void {

  }

  refreshUser() {

  }
}
