import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AppStyle1Component } from './style1/style1.component';
import { AppStyle2Component } from './style2/style2.component';

import { DragDropModule } from './drag-drop/drag-drop.module';

const routes: Routes = [
  {
    path: 'style1',
    component: AppStyle1Component
  },
  {
    path: 'style2',
    component: AppStyle2Component
  },
  {
    path: '**',
    redirectTo: 'style1'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    AppStyle1Component,
    AppStyle2Component
  ],
  imports: [
    BrowserModule,
    DragDropModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
