import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AngularWelcomeComponent} from "../../angular-welcome/angular-welcome.component";
import {B001Component} from "./pages/b001/b001.component";

const routes: Routes = [
  {
    path: 'b-001',
    component: B001Component,
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BugfixRoutingModule { }
