import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FixPipe } from './fix.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [FixPipe],
  exports: [FixPipe],
})
export class PipeModule { }
