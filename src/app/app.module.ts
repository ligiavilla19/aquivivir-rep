import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { BannerModule } from './@componets/banner/banner.module';
import { ComotrabajamosModule } from './@componets/comotrabajamos/comotrabajamos.module';
import { DestacadasModule } from './@componets/destacadas/destacadas.module';
import { FutterModule } from './@componets/futter/futter.module';
import { LocacionModule } from './@componets/locacion/locacion.module';
import { LogoPrincipalModule } from './@componets/logo-principal/logo-principal.module';
import { MenuModule } from './@componets/menu/menu.module';
import { NavbarModule } from './@componets/navbar/navbar.module';
import { UltimasModule } from './@componets/ultimas/ultimas.module';
import { AppComponent } from './app.component';
import { MenupropiedadesComponent } from './@componets/menupropiedades/menupropiedades.component';
import { MenupropiedadesModule } from './@componets/menupropiedades/menupropiedades.module';
import { RegistroModule } from './registro/registro.module';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponentComponent } from './home-component/home-component.component';
import { RouterModule, Routes } from '@angular/router';
import { RegistroComponent } from './registro/registro.component';
import { PublicarComponent } from './publicar/publicar.component';
import { PlanesComponent } from './planes/planes.component';


const appRoutes:Routes=[

  { path:'', component :HomeComponentComponent},
  { path:'registro', component: RegistroComponent},
  { path:'publicar', component: PublicarComponent},
  { path:'planes', component: PlanesComponent}

]




@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent,
    PublicarComponent,
    PlanesComponent


  ],
  imports: [
    BrowserModule,
    BannerModule,
    ComotrabajamosModule,
    DestacadasModule,
    FutterModule,
    LocacionModule,
    LogoPrincipalModule,
    NavbarModule,
    UltimasModule,
    MenupropiedadesModule,
    RegistroModule,
    MenuModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
