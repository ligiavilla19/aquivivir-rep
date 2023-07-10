import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MostrartodoComponent } from './mostrartodo.component';



@NgModule({
  declarations: [
    MostrartodoComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[MostrartodoComponent]
})
export class MostrartodoModule { }
