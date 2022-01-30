import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {B001Component} from "./pages/b001/b001.component";
import {B002Component} from "./pages/b002/b002.component";
import {B003Component} from "./pages/b003/b003.component";

const routes: Routes = [
  {
    path: 'b-001',
    component: B001Component,
    pathMatch: 'full',
  },
  {
    path: 'b-002',
    component: B002Component,
    pathMatch: 'full',
  },
  {
    path: 'b-003',
    component: B003Component,
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BugfixRoutingModule { }
