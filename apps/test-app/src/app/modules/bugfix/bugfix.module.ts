import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BugfixRoutingModule } from './bugfix-routing.module';
import { B001Component } from './pages/b001/b001.component';
import {B002Component} from "./pages/b002/b002.component";
import {HeroChildComponent} from "./components/hero-child/hero-child.component";
import {B003Component, NgbdSortableHeader} from './pages/b003/b003.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { UserViewerComponent } from './components/user-viewer/user-viewer.component';


@NgModule({
  declarations: [
    B001Component,
    B002Component,
    HeroChildComponent,
    B003Component,
    NgbdSortableHeader,
    UserViewerComponent
  ],
  imports: [
    CommonModule,
    BugfixRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class BugfixModule { }
