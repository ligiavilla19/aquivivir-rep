import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoPrincipalComponent } from './logo-principal.component';



@NgModule({
  declarations: [
    LogoPrincipalComponent
  ],
  imports: [
    CommonModule
  ], 
  exports:[LogoPrincipalComponent]
})
export class LogoPrincipalModule { }
