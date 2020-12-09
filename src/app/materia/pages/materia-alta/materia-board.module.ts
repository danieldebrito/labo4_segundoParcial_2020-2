import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MateriaBoardRoutingModule } from './materia-board-routing.module';
import { MateriaBoardComponent } from './materia-board.component';

import { MateriaModule } from 'src/app/materia/materia.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { UsersModule } from 'src/app/users/users.module';

@NgModule({
  declarations: [
    MateriaBoardComponent,
  ],
  imports: [
    CommonModule,
    MateriaBoardRoutingModule,
    MateriaModule,
    FormsModule,
    ReactiveFormsModule,
    UsersModule
  ],
  exports: [
    MateriaBoardComponent
  ]
})
export class MateriaBoardModule { }
