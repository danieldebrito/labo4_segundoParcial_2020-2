import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersListadoComponent } from './components/users-listado/users-listado.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { UserDetalleComponent } from './components/user-detalle/user-detalle.component';

import { PagesUsersListadoFiltroModule } from './pages-users-listado-filtro/pages-users-listado-filtro.module';

@NgModule({
  declarations: [UsersListadoComponent, UserDetalleComponent],
  imports: [
    CommonModule,
    NgxPaginationModule,
    PagesUsersListadoFiltroModule
  ],
  exports: [
    UsersListadoComponent,
    UserDetalleComponent
  ]
})
export class UsersModule { }
