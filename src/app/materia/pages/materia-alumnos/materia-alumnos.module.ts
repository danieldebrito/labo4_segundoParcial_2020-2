import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MateriaAlumnosRoutingModule } from './materia-alumnos-routing.module';
import { MateriaAlumnosComponent } from './materia-alumnos.component';

import { MateriaModule } from 'src/app/materia/materia.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { UsersModule } from 'src/app/users/users.module';

@NgModule({
  declarations: [
    MateriaAlumnosComponent
  ],
  imports: [
    CommonModule,
    MateriaModule,
    FormsModule,
    ReactiveFormsModule,
    UsersModule,
    MateriaAlumnosRoutingModule
  ],
  exports: [
    MateriaAlumnosComponent
  ]
})
export class MateriaAlumnosModule { }
