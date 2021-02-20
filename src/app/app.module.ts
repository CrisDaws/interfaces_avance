import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PasajeroComponent } from './pasajero/pasajero.component';
import { AcercaComponent } from './acerca/acerca.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ConductorComponent } from './conductor/conductor.component';
import { AdminComponent } from './admin/admin.component';
import { RegPasajeroComponent } from './reg-pasajero/reg-pasajero.component';
import { RegConductorComponent } from './reg-conductor/reg-conductor.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    PasajeroComponent,
    AcercaComponent,
    CarouselComponent,
    ConductorComponent,
    AdminComponent,
    RegPasajeroComponent,
    RegConductorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
