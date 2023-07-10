import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocacionComponent } from './locacion.component';



@NgModule({
  declarations: [
    LocacionComponent
  ],
  imports: [
    CommonModule
  ],exports:[LocacionComponent]
})
export class LocacionModule { }
