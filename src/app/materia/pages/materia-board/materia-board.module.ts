import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MateriaBoardRoutingModule } from './materia-board-routing.module';
import { MateriaBoardComponent } from './materia-board.component';

import { MateriaModule } from 'src/app/materia/materia.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MateriaBoardComponent,
  ],
  imports: [
    CommonModule,
    MateriaBoardRoutingModule,
    MateriaModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    MateriaBoardComponent
  ]
})
export class MateriaBoardModule { }
