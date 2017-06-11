import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import custom pipe 
import { PipeModule } from '../commons/pipe/pipe.module';

import { Compo1Component } from './compo1.component';

@NgModule({
  imports: [CommonModule, PipeModule],
  declarations: [Compo1Component],
  exports: [Compo1Component]
})
export class Compo1Module { }
