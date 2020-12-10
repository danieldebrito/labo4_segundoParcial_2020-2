import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MateriaAlumnosDetalleComponent } from './materia-alumnos-detalle.component';

const routes: Routes = [
  {
    path: '',
    component: MateriaAlumnosDetalleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MateriaAlumnosDetalleRoutingModule { }
