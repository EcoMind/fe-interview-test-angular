import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BugfixRoutingModule } from './bugfix-routing.module';
import { B001Component } from './pages/b001/b001.component';


@NgModule({
  declarations: [
    B001Component
  ],
  imports: [
    CommonModule,
    BugfixRoutingModule
  ]
})
export class BugfixModule { }
