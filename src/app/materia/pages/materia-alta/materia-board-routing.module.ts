import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MateriaBoardComponent } from './materia-board.component';

const routes: Routes = [
  {
    path: '',
    component: MateriaBoardComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MateriaBoardRoutingModule { }
