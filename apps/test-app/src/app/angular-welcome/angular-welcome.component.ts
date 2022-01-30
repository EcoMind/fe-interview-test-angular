import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'fe-interview-test-angular-angular-welcome',
  templateUrl: './angular-welcome.component.html',
  styles: [
    `
      :host {
        display: block;
      }
    `
  ],
  encapsulation: ViewEncapsulation.Emulated
})
export class AngularWelcomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
