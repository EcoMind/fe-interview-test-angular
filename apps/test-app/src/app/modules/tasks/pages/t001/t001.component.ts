import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'fe-interview-test-angular-t001',
  templateUrl: './t001.component.html',
  styles: [
    `
      :host {
        display: block;
      }
    `
  ],
  encapsulation: ViewEncapsulation.Emulated
})
export class T001Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
