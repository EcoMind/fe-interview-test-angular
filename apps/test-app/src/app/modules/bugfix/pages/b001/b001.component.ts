import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validator, Validators} from "@angular/forms";
import {ExtendendInfo, FormUser} from "../../models/form-user";

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
  telePhoneFormControl: FormControl;
  addressFormControl: FormControl;

  editingUser: FormUser | undefined;
  constructor(private fb: FormBuilder) {
    this.nameFormControl = new FormControl('', Validators.required);
    this.surNameFormControl = new FormControl('', Validators.required);
    this.telePhoneFormControl = new FormControl('', Validators.required);
    this.addressFormControl = new FormControl('', Validators.required);
    this.formGroup = this.fb.group({
        nameFormControl: this.nameFormControl,
        surNameFormControl: this.surNameFormControl,
        telePhoneFormControl: this.telePhoneFormControl,
        addressFormControl: this.addressFormControl
      }
    );
  }

  ngOnInit(): void {
    this.editingUser = new FormUser();
    this.editingUser.extraInfo = new ExtendendInfo();
  }

  refreshUser() {
    if(this.editingUser && this.editingUser.extraInfo) {
      this.editingUser.name = this.nameFormControl.value;
      this.editingUser.surName = this.surNameFormControl.value;
      this.editingUser.extraInfo.telephone = this.telePhoneFormControl.value;
      this.editingUser.extraInfo.address = this.addressFormControl.value;
    }
  }
}
