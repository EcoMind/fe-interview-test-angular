import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksRoutingModule } from './tasks-routing.module';
import { T001Component } from './pages/t001/t001.component';
import { T002Component } from './pages/t002/t002.component';


@NgModule({
  declarations: [
    T001Component,
    T002Component
  ],
  imports: [
    CommonModule,
    TasksRoutingModule
  ]
})
export class TasksModule { }
