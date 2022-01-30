import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'fe-interview-test-angular-hero-child',
  templateUrl: './hero-child.component.html',
  encapsulation: ViewEncapsulation.None
})
export class HeroChildComponent implements OnInit {

  @Input() heroChildName: any = '.?.'

  constructor() { }

  ngOnInit(): void {
  }

}
