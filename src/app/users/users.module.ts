import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersListadoComponent } from './components/users-listado/users-listado.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { UserDetalleComponent } from './components/user-detalle/user-detalle.component';
import { UserslistadoDetalleComponent } from './pages/userslistado-detalle/userslistado-detalle.component';

@NgModule({
  declarations: [UsersListadoComponent, UserDetalleComponent, UserslistadoDetalleComponent],
  imports: [
    CommonModule,
    NgxPaginationModule,

  ],
  exports: [
    UsersListadoComponent,
    UserDetalleComponent
  ]
})
export class UsersModule { }
