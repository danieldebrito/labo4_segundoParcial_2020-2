import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { MateriaRoutingModule } from './materia-routing.module';
import { MateriaAltaComponent } from './components/materia-alta/materia-alta.component';
import { MateriaBorrarComponent } from './components/materia-borrar/materia-borrar.component';
import { MateriaBusquedaComponent } from './components/materia-busqueda/materia-busqueda.component';
import { MateriaDetalleComponent } from './components/materia-detalle/materia-detalle.component';
import { MateriaListadoComponent } from './components/materia-listado/materia-listado.component';
import { MateriaModificarComponent } from './components/materia-modificar/materia-modificar.component';
import { MateriaComponent } from './materia.component';

@NgModule({
  declarations: [
    MateriaAltaComponent,
    MateriaBorrarComponent,
    MateriaBusquedaComponent,
    MateriaDetalleComponent,
    MateriaListadoComponent,
    MateriaModificarComponent,
    MateriaComponent,
  ],
  imports: [
    CommonModule,
    MateriaRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    MateriaAltaComponent,
    MateriaBorrarComponent,
    MateriaBusquedaComponent,
    MateriaDetalleComponent,
    MateriaListadoComponent,
    MateriaModificarComponent,
    MateriaComponent,
  ]
})
export class MateriaModule { }
