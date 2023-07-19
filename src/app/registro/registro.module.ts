import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistroComponent } from './registro.component';
import { FutterModule } from "../@componets/futter/futter.module";
import { BannerModule } from "../@componets/banner/banner.module";
import { NavbarModule } from "../@componets/navbar/navbar.module";
import { RouterModule } from '@angular/router';



@NgModule({
    declarations: [RegistroComponent],
    exports: [RegistroComponent],
    imports: [CommonModule, FutterModule, BannerModule, NavbarModule,RouterModule]
})
export class RegistroModule { }
