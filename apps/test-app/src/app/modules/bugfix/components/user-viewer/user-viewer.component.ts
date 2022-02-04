import {Component, Input, ViewEncapsulation} from '@angular/core';
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
export class UserViewerComponent {
  @Input()
  currentUser: FormUser | undefined;
  constructor() {
    // This is intentional
  }

}
