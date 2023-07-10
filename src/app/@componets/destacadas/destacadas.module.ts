import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DestacadasComponent } from './destacadas.component';



@NgModule({
  declarations: [
    DestacadasComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[DestacadasComponent]
})
export class DestacadasModule { }
