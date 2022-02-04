import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'fe-interview-test-angular-layout-base',
  templateUrl: './layout-base.component.html',
  styles: [
    `
      :host {
        display: block;
      }
    `
  ],
  encapsulation: ViewEncapsulation.Emulated
})
export class LayoutBaseComponent {

  constructor() {
    // This is intentional
  }

}
