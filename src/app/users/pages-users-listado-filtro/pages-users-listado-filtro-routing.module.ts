import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagesUsersListadoFiltroComponent } from './pages-users-listado-filtro.component';

const routes: Routes = [
  {
    path: '',
    component: PagesUsersListadoFiltroComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesUsersListadoFiltroRoutingModule { }
