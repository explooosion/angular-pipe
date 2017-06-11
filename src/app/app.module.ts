import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// import custom pipe 
import { PipeModule } from './commons/pipe/pipe.module';

import { Compo1Module } from './compo1/compo1.module';

import { Compo2Component } from './compo2/compo2.component';

@NgModule({
  declarations: [
    AppComponent,
    Compo2Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PipeModule,
    FormsModule,
    Compo1Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
