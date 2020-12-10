import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesUsersListadoFiltroRoutingModule } from './pages-users-listado-filtro-routing.module';

import { PagesUsersListadoFiltroComponent } from './pages-users-listado-filtro.component';


@NgModule({
  declarations: [
    PagesUsersListadoFiltroComponent
  ],
  imports: [
    CommonModule,
    PagesUsersListadoFiltroRoutingModule
  ],
  exports: [
    PagesUsersListadoFiltroComponent
  ]
})
export class PagesUsersListadoFiltroModule { }
