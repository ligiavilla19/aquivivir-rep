import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UltimasComponent } from './ultimas.component';



@NgModule({
  declarations: [
    UltimasComponent
  ],
  imports: [
    CommonModule
  ], 
  exports:[UltimasComponent]
})
export class UltimasModule { }
