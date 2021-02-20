import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PasajeroComponent } from './pasajero/pasajero.component';
import { AcercaComponent } from './acerca/acerca.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ConductorComponent } from './conductor/conductor.component';
import { AdminComponent } from './admin/admin.component';
import { RegConductorComponent } from './reg-conductor/reg-conductor.component';
import { RegPasajeroComponent } from './reg-pasajero/reg-pasajero.component';

const rutas: Routes = [
  { path: 'pasajero', component: PasajeroComponent },
  { path: 'acerca' , component: AcercaComponent },
  { path: 'nav-bar', component: NavBarComponent },
  { path: 'carousel', component: CarouselComponent },
  { path: 'conductor', component: ConductorComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'regConductor', component: RegConductorComponent },
  { path: 'regPasajero', component: RegPasajeroComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(rutas)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
