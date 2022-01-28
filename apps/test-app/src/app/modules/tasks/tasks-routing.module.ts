import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {T001Component} from "./pages/t001/t001.component";

const routes: Routes = [
  {
    path:'t-001',
    component: T001Component,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TasksRoutingModule { }
