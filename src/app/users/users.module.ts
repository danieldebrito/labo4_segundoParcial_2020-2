import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersListadoComponent } from './components/users-listado/users-listado.component';
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module



@NgModule({
  declarations: [UsersListadoComponent],
  imports: [
    CommonModule,
    NgxPaginationModule
  ],
  exports: [
    UsersListadoComponent
  ]
})
export class UsersModule { }
