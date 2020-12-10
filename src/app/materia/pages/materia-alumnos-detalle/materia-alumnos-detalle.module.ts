import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MateriaAlumnosDetalleRoutingModule } from './materia-alumnos-detalle-routing.module';

import { MateriaModule } from 'src/app/materia/materia.module';
import { UsersModule } from 'src/app/users/users.module';

import { MateriaAlumnosDetalleComponent } from './materia-alumnos-detalle.component';

@NgModule({
  declarations: [
    MateriaAlumnosDetalleComponent
  ],
  imports: [
    CommonModule,
    MateriaAlumnosDetalleRoutingModule,
    MateriaModule,
    UsersModule
  ],
  exports: [
    MateriaAlumnosDetalleComponent
  ]
})
export class MateriaAlumnosDetalleModule { }
