import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { MarkdownModule } from 'ngx-markdown';

import { DragDropComponent } from './drag-drop.component';
import { DragDropDirective } from './drag-drop.directive';

@NgModule({
  declarations: [
    DragDropComponent,
    DragDropDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MarkdownModule.forRoot({ loader: HttpClient }),
  ],
  providers: [
    HttpClientModule
  ],
  exports: [
    DragDropComponent
  ]
})
export class DragDropModule { }
