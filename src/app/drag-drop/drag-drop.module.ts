import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { MarkdownModule } from 'ngx-markdown';

import { DragDropComponent } from './drag-drop.component';
import { DragDropDirective } from './drag-drop.directive';

@NgModule({ declarations: [
        DragDropComponent,
        DragDropDirective
    ],
    exports: [
        DragDropComponent
    ], imports: [BrowserModule,
        MarkdownModule.forRoot({ loader: HttpClient })], providers: [
        HttpClientModule,
        provideHttpClient(withInterceptorsFromDi())
    ] })
export class DragDropModule { }
