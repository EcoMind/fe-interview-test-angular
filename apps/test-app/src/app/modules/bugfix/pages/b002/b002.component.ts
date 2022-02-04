import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'fe-interview-test-angular-b002',
  templateUrl: './b002.component.html',
  encapsulation: ViewEncapsulation.None
})
export class B002Component {

  heroParentName = 'Magneta';
  heroChildName = 'Bombasto';

  constructor() {
    // This is intentional
  }

}
