import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularWelcomeComponent } from './angular-welcome/angular-welcome.component';
import {RouterModule, Routes} from "@angular/router";
import { LayoutBaseComponent } from './layout-base/layout-base.component';

export const APP_ROUTES: Routes = [
  {
    path: '',
    component: LayoutBaseComponent,
    children: [
      {
        path: '',
        redirectTo: 'welcome',
        pathMatch: 'full'
      },
      {
        path: 'welcome',
        component: AngularWelcomeComponent,
        pathMatch: 'full',
      },
      {
        path: 'bugfix',
        loadChildren: () => import('./modules/bugfix/bugfix.module').then(module => module.BugfixModule)
      },
      {
        path: 'tasks',
        loadChildren: () => import('./modules/tasks/tasks.module').then(module => module.TasksModule)
      },
    ]
  }
];

@NgModule({
  declarations: [AppComponent, AngularWelcomeComponent, LayoutBaseComponent],
  imports: [BrowserModule,
    NgbModule,
    RouterModule.forRoot(APP_ROUTES, { initialNavigation: 'enabled' })],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
