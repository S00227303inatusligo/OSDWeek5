import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';

@NgModule({
  declarations: [
    
  ],
  imports: [
    BrowserModule,
    Child1Component,
    Child2Component,
    AppComponent
  ],
  providers: []
})
export class AppModule { }
