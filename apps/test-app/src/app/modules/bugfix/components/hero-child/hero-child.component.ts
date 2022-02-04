import {Component, Input, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'fe-interview-test-angular-hero-child',
  templateUrl: './hero-child.component.html',
  encapsulation: ViewEncapsulation.None
})
export class HeroChildComponent {

  @Input() heroChildName: any = '.?.'

  constructor() {
    // This is intentional
  }


}
