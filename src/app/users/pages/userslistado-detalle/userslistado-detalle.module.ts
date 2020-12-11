import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserslistadoDetalleRoutingModule } from './userslistado-detalle-routing.module';
import { UserslistadoDetalleComponent } from 'src/app/users/pages/userslistado-detalle/userslistado-detalle.component'
import { UsersModule } from 'src/app/users/users.module';

@NgModule({
  declarations: [UserslistadoDetalleComponent],
  imports: [
    CommonModule,
    UserslistadoDetalleRoutingModule,
    UsersModule
  ]
})
export class UserslistadoDetalleModule { }
