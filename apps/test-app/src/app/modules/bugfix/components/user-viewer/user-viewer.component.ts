import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {FormUser} from "../../models/form-user";

@Component({
  selector: 'fe-interview-test-angular-user-viewer',
  templateUrl: './user-viewer.component.html',
  styles: [
    `
      :host {
        display: block;
      }
    `
  ],
  encapsulation: ViewEncapsulation.Emulated
})
export class UserViewerComponent implements OnInit {
  @Input()
  currentUser: FormUser | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
