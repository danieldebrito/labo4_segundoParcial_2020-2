import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MateriaAlumnosComponent } from './materia-alumnos.component';

const routes: Routes = [
  {
    path: '',
    component:  MateriaAlumnosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MateriaAlumnosRoutingModule { }
