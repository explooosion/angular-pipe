import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// import custom pipe 
import { PipeModule } from './commons/pipe/pipe.module';
import { Compo1Component } from './compo1/compo1.component';
import { Compo2Component } from './compo2/compo2.component';

@NgModule({
  declarations: [
    AppComponent,
    Compo1Component,
    Compo2Component,
    Compo1Component,
    Compo2Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PipeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
