import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserslistadoDetalleComponent } from 'src/app/users/pages/userslistado-detalle/userslistado-detalle.component';

const routes: Routes = [
  {
    path: '',
    component: UserslistadoDetalleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserslistadoDetalleRoutingModule { }
