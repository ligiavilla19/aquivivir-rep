import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FutterComponent } from './futter.component';



@NgModule({
  declarations: [
    FutterComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[FutterComponent]
})
export class FutterModule { }
