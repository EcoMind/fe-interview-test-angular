import { Component, OnInit, ViewEncapsulation } from '@angular/core';

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
export class LayoutBaseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
